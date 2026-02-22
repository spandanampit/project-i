const crypto = require('crypto');

function normalizeEmail(value) {
  return (value || '').toString().trim().toLowerCase();
}

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

function createPasswordHash(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(password, salt);

  return { passwordHash, passwordSalt: salt };
}

module.exports = {
  normalizeEmail,
  hashPassword,
  createPasswordHash,
};
