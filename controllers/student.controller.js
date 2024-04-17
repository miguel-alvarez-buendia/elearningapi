const Course = require('../models/course.model');
const Lesson = require('../models/lesson.model');
const Question = require('../models/question.model');

async function getCoursesForStudent(req, res) {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getLessonsForStudent(req, res) {
    const { courseId } = req.params;

    try {
        const lessons = await Lesson.findAll({ where: { courseId } });
        res.json(lessons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function takeLesson(req, res) {
    const { lessonId } = req.params;
    const { answers } = req.body;

    try {
        const lesson = await Lesson.findByPk(lessonId, { include: Question });
        if (!lesson) throw new Error('Lesson not found');

        let totalScore = 0;
        for (const answer of answers) {
            const question = lesson.Questions.find(q => q.id === answer.questionId);
            if (!question) throw new Error('Question not found');

            let isCorrect = false;
            if (question.type === 'boolean') {
                isCorrect = (question.correctAnswers === answer.answer);
            } else if (question.type === 'single-choice') {
                isCorrect = (question.correctAnswers[0] === answer.answer);
            } else if (question.type === 'multi-choice') {
                isCorrect = arraysEqual(question.correctAnswers, answer.answer);
            } else if (question.type === 'multi-choice-all') {
                isCorrect = arraysEqual(question.correctAnswers.sort(), answer.answer.sort());
            }

            if (isCorrect) {
                totalScore += question.score;
            }
        }

        res.json({ message: 'Lesson completed', totalScore });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


module.exports = {
    getCoursesForStudent,
    getLessonsForStudent,
    takeLesson
};
