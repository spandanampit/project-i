const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    enrollmentDate: { type: Date, required: true },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    batch: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
  },
  {
    collection: 'students',
    timestamps: true,
  }
);

module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema);
