const Question = require('../models/question.model');

async function createQuestion(req, res) {
    const { text, type, correctAnswers, lessonId } = req.body;

    try {
        const question = await Question.create({ text, type, correctAnswers, lessonId });
        res.status(201).json(question);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getQuestions(req, res) {
    const { lessonId } = req.params;

    try {
        const questions = await Question.findAll({ where: { lessonId } });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateQuestion(req, res) {
    const { id } = req.params;
    const { text, type, correctAnswers } = req.body;

    try {
        const question = await Question.findByPk(id);
        if (!question) throw new Error('Question not found');

        question.text = text;
        question.type = type;
        question.correctAnswers = correctAnswers;
        await question.save();

        res.json(question);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteQuestion(req, res) {
    const { id } = req.params;

    try {
        const question = await Question.findByPk(id);
        if (!question) throw new Error('Question not found');

        await question.destroy();
        res.json({ message: 'Question deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion
};
