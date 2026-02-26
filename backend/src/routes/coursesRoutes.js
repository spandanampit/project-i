const express = require('express');
const coursesController = require('../controllers/coursesController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', requireAuth, coursesController.listCourses);
router.post('/', requireAuth, coursesController.createCourse);

module.exports = router;
