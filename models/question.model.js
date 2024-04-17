const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('boolean', 'single-choice', 'multi-choice', 'multi-choice-all'),
        allowNull: false
    },
    correctAnswers: {
        type: DataTypes.JSON,
        allowNull: false
    },
    lessonId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Question;

/*
  score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
*/