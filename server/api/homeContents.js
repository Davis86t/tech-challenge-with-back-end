const router = require('express').Router();
const { models: { Home_Content }, } = require('../db');

// GET /api/homecontents
router.get('/', async (req, res, next) => {
  try {
    const content = await Home_Content.findAll()
    res.json(content)
  } catch (err) {
    next(err)
  }
})

module.exports = router;