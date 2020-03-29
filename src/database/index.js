/**
 * Database (SQlite+Sequelize) configuration file
 */
const Sequelize = require('sequelize');

const sqlite3 = require('sqlite3').verbose();

module.exports = new Sequelize({
  dialectModule: sqlite3,
  dialect: 'sqlite',
  storage: './database.sqlite'
});
