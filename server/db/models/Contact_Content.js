const Sequelize = require('sequelize')
const db = require('../db')

const Contact_Content = db.define('contactContent', {
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

module.exports = Contact_Content