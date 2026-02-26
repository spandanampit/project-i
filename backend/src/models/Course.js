const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    room: { type: String, required: true, trim: true },
    maxStudents: { type: Number, required: true, min: 1 },
    salary: { type: Number, required: true, min: 0 },
    feesType: { type: String, enum: ['weekly', 'monthly', 'yearly'], default: 'monthly' },
    students: { type: Number, default: 0, min: 0 },
    scheduleDays: {
      type: [String],
      required: true,
      validate: {
        validator(value) {
          return Array.isArray(value) && value.length > 0;
        },
        message: 'At least one schedule day is required.',
      },
    },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  },
  {
    collection: 'courses',
    timestamps: true,
  }
);

module.exports = mongoose.models.Course || mongoose.model('Course', courseSchema);
