const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

module.exports = app

// static middleware
app.use(express.static(path.join(__dirname, '..', 'pages')))

// logging middleware
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./api'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '..', 'pages/index.js')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/index.js'))
})

// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'pages')))

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})


