const router = require('express').Router();
const { models: { Contact_Content }, } = require('../db');

// GET /api/contactContents
router.get('/', async (req, res, next) => {
  try {
    const content = await Contact_Content.findAll()
    res.json(content)
  } catch (err) {
    next(err)
  }
})

module.exports = router;