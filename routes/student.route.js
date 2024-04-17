const express = require('express');
const { getCoursesForStudent, getLessonsForStudent, takeLesson } = require('../controllers/student.controller');
const router = express.Router();

router.get('/courses', getCoursesForStudent);
router.get('/courses/:courseId/lessons', getLessonsForStudent);
router.post('/lessons/:lessonId/take', takeLesson);

module.exports = router;