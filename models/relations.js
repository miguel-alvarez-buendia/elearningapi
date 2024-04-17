const Course = require('./course.model');
const Lesson = require('./lesson.model');
const Question = require('./lesson.model');


Course.hasMany(Lesson, { as: 'lessons', foreignKey: 'courseId' });

Lesson.belongsTo(Course, { as: 'course', foreignKey: 'courseId' });
Lesson.hasMany(Question, { as: 'questions', foreignKey: 'lessonId' });

Question.belongsTo(Lesson, { as: 'lesson', foreignKey: 'lessonId' });
