const express = require('express');
const { createLesson, getLessons, updateLesson, deleteLesson } = require('../controllers/lesson.controller');

const router = express.Router();

router.get('/:courseId', getLessons);

router.post('/', createLesson);

router.put('/:id', updateLesson);

router.delete('/:id', deleteLesson);

module.exports = router;
