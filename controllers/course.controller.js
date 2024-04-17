const Course  = require('../models/course.model');

async function createCourse(req, res) {
    const { title, description } = req.body;

    try {
        const course = await Course.create({ title, description });
        res.status(201).json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function getCourses(req, res) {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateCourse(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const course = await Course.findByPk(id);
        if (!course) throw new Error('Course not found');

        course.title = title;
        course.description = description;
        await course.save();

        res.json(course);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

async function deleteCourse(req, res) {
    const { id } = req.params;

    try {
        const course = await Course.findByPk(id);
        if (!course) throw new Error('Course not found');

        await course.destroy();
        res.json({ message: 'Course deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createCourse,
    getCourses,
    updateCourse,
    deleteCourse
};
