const Course = require('../models/Course');

function isValidTime(value) {
  return typeof value === 'string' && /^\d{2}:\d{2}$/.test(value);
}

async function createCourse(req, res) {
  const title = (req.body.title || '').toString().trim();
  const room = (req.body.room || '').toString().trim();
  const maxStudents = Number(req.body.maxStudents);
  const salary = Number(req.body.salary);
  const feesType = (req.body.feesType || 'monthly').toString().trim().toLowerCase();
  const scheduleDays = Array.isArray(req.body.scheduleDays)
    ? req.body.scheduleDays.map((day) => day.toString().trim()).filter(Boolean)
    : [];
  const startTime = (req.body.startTime || '').toString().trim();
  const endTime = (req.body.endTime || '').toString().trim();

  if (!title || !room) {
    return res.status(400).json({ message: 'Course title and room are required.' });
  }

  if (!Number.isInteger(maxStudents) || maxStudents < 1) {
    return res.status(400).json({ message: 'Max students must be a positive whole number.' });
  }

  if (!Number.isFinite(salary) || salary < 0) {
    return res.status(400).json({ message: 'Salary must be zero or greater.' });
  }

  if (!['weekly', 'monthly', 'yearly'].includes(feesType)) {
    return res.status(400).json({ message: 'Fees type must be weekly, monthly, or yearly.' });
  }

  if (scheduleDays.length === 0) {
    return res.status(400).json({ message: 'Select at least one schedule day.' });
  }

  if (!isValidTime(startTime) || !isValidTime(endTime)) {
    return res.status(400).json({ message: 'Start and end time must be valid.' });
  }

  if (startTime >= endTime) {
    return res.status(400).json({ message: 'End time must be later than start time.' });
  }

  const course = await Course.create({
    title,
    room,
    maxStudents,
    salary,
    feesType,
    scheduleDays,
    startTime,
    endTime,
    createdBy: req.session.user.id,
  });

  return res.status(201).json({
    message: 'Course created successfully.',
    course,
  });
}

async function listCourses(req, res) {
  const courses = await Course.find({ createdBy: req.session.user.id })
    .sort({ createdAt: -1 })
    .lean();

  return res.status(200).json({ courses });
}

module.exports = {
  createCourse,
  listCourses,
};
