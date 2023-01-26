//this is the access point for all things database related!

const db = require('./db')

const Contact_Content = require('./models/Contact_Content')
const Home_Content = require('./models/Home_Content')
const Contact_Form = require('./models/Contact_Form')

module.exports = {
  db,
  models: {
    Contact_Content,
    Home_Content,
    Contact_Form
  },
}
