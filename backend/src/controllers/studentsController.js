const mongoose = require('mongoose');
const Course = require('../models/Course');
const Student = require('../models/Student');

function normalizeEmail(value) {
  return (value || '').toString().trim().toLowerCase();
}

async function createStudent(req, res) {
  const fullName = (req.body.fullName || '').toString().trim();
  const email = normalizeEmail(req.body.email);
  const phone = (req.body.phone || '').toString().trim();
  const batchId = (req.body.batchId || '').toString().trim();
  const enrollmentDateRaw = (req.body.enrollmentDate || '').toString().trim();

  if (!fullName || !email || !phone || !batchId || !enrollmentDateRaw) {
    return res.status(400).json({
      message: 'Full name, email, phone, batch, and enrollment date are required.',
    });
  }

  if (!mongoose.isValidObjectId(batchId)) {
    return res.status(400).json({ message: 'Invalid batch selected.' });
  }

  const enrollmentDate = new Date(enrollmentDateRaw);
  if (Number.isNaN(enrollmentDate.getTime())) {
    return res.status(400).json({ message: 'Enrollment date is invalid.' });
  }

  const course = await Course.findOne({
    _id: batchId,
    createdBy: req.session.user.id,
  });

  if (!course) {
    return res.status(404).json({ message: 'Batch not found.' });
  }

  const existingStudent = await Student.findOne({
    createdBy: req.session.user.id,
    email,
    batch: batchId,
  });

  if (existingStudent) {
    return res.status(409).json({
      message: 'A student with this email already exists in the selected batch.',
    });
  }

  const student = await Student.create({
    fullName,
    email,
    phone,
    enrollmentDate,
    batch: batchId,
    createdBy: req.session.user.id,
  });

  await Course.findByIdAndUpdate(batchId, { $inc: { students: 1 } });

  const populatedStudent = await Student.findById(student._id)
    .populate('batch', 'title room feesType')
    .lean();

  return res.status(201).json({
    message: 'Student added successfully.',
    student: populatedStudent,
  });
}

async function listStudents(req, res) {
  const students = await Student.find({ createdBy: req.session.user.id })
    .populate('batch', 'title room feesType')
    .sort({ createdAt: -1 })
    .lean();

  return res.status(200).json({ students });
}

module.exports = {
  createStudent,
  listStudents,
};
