const Sequelize = require('sequelize')
const db = require('../db')

const Home_Content = db.define('homeContents', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = Home_Content