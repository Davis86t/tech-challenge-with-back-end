const Sequelize = require('sequelize')
const db = require('../db')

const Contact_Form = db.define('contactForm', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  title: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.TEXT,
  },
});

module.exports = Contact_Form