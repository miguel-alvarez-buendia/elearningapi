const Lesson = require('../models/lesson.model');

async function createLesson(req, res) {
    const { title, content, courseId } = req.body;

    try {
        const lesson = await Lesson.create({ title, content, courseId });
        res.status(201).json(lesson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getLessons(req, res) {
    const { courseId } = req.params;

    try {
        const lessons = await Lesson.findAll({ where: { courseId } });
        res.json(lessons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateLesson(req, res) {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const lesson = await Lesson.findByPk(id);
        if (!lesson) throw new Error('Lesson not found');

        lesson.title = title;
        lesson.content = content;
        await lesson.save();

        res.json(lesson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteLesson(req, res) {
    const { id } = req.params;

    try {
        const lesson = await Lesson.findByPk(id);
        if (!lesson) throw new Error('Lesson not found');

        await lesson.destroy();
        res.json({ message: 'Lesson deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createLesson,
    getLessons,
    updateLesson,
    deleteLesson
};
