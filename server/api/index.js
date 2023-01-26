const router = require('express').Router()

router.use('/homeContents', require('./homeContents'))
router.use('/contactContents', require('./contactContents'))
router.use('/contactForm', require('./contactForm'))

router.get('/', (req, res) => {
  res.send('All routes in here start with /api');
})

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router