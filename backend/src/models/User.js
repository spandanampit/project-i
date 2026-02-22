const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    academyName: { type: String, trim: true, default: '' },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
  },
  {
    collection: 'users',
    timestamps: true,
  }
);

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
