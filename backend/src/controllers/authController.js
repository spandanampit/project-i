const User = require('../models/User');
const { createPasswordHash, hashPassword, normalizeEmail } = require('../utils/password');
const { toSessionUser } = require('../utils/user');

async function register(req, res) {
  const fullName = (req.body.fullName || '').toString().trim();
  const academyName = (req.body.academyName || '').toString().trim();
  const email = normalizeEmail(req.body.email);
  const password = (req.body.password || '').toString();

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Full name, email, and password are required.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters.' });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists with this email.' });
  }

  const { passwordHash, passwordSalt } = createPasswordHash(password);

  const user = await User.create({
    fullName,
    academyName,
    email,
    passwordHash,
    passwordSalt,
  });

  const sessionUser = toSessionUser(user);
  req.session.user = sessionUser;

  return res.status(201).json({
    message: 'Registration successful.',
    user: sessionUser,
  });
}

async function login(req, res) {
  const email = normalizeEmail(req.body.email);
  const password = (req.body.password || '').toString();

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const currentHash = hashPassword(password, user.passwordSalt);
  if (currentHash !== user.passwordHash) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const sessionUser = toSessionUser(user);
  req.session.user = sessionUser;

  return res.status(200).json({
    message: 'Login successful.',
    user: sessionUser,
  });
}

async function getMe(req, res) {
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return res.status(200).json({ user: req.session.user });
}

async function logout(req, res) {
  req.session.destroy(() => {
    res.clearCookie('tsx.sid');
    res.status(200).json({ message: 'Logout successful.' });
  });
}

module.exports = {
  register,
  login,
  getMe,
  logout,
};
