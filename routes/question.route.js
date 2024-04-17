const express = require('express');
const { createQuestion, getQuestions, updateQuestion, deleteQuestion } = require('../controllers/question.controller');

const router = express.Router();

router.get('/:lessonId', getQuestions);

router.post('/', createQuestion);

router.put('/:id', updateQuestion);

router.delete('/:id', deleteQuestion);

module.exports = router;
