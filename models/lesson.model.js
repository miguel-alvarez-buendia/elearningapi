const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Lesson = sequelize.define('Lesson', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Lesson;
