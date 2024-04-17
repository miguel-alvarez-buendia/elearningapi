const Sequelize = require('sequelize');

const sequelize = new Sequelize('elearning', 'miguel', 'm16u3l', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
