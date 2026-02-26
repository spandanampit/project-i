const express = require('express');
const studentsController = require('../controllers/studentsController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', requireAuth, studentsController.listStudents);
router.post('/', requireAuth, studentsController.createStudent);

module.exports = router;
