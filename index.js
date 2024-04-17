const express = require('express');
const sequelize = require('./config/sequelize.config');
const coursesRoutes = require('./routes/courses.route');
const lessonsRoutes = require('./routes/lesson.route');
const questionsRoutes = require('./routes/question.route');
const studentRoutes = require('./routes/question.route');


const authRouter = require('./routes/auth.route');
const { authenticateToken } = require('./config/auth');
require('./models/relations');

const app = express();
app.use(express.json());

app.use('/auth', authRouter);
app.use('/courses', authenticateToken, coursesRoutes);
app.use('/lessons', authenticateToken, lessonsRoutes);
app.use('/questions', authenticateToken, questionsRoutes);
app.use('/student', authenticateToken, studentRoutes);


sequelize.sync().then(() => {
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(error => {
    console.error('Unable to sync database:', error);
});
