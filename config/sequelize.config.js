const Sequelize = require('sequelize');
require('dotenv').config();

const dataBase = process.env.DATABASE;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;
const port = process.env.port;

const sequelize = new Sequelize(dataBase, username, password, {
  host: host,
  dialect: dialect,
  port: port
});

module.exports = sequelize;
