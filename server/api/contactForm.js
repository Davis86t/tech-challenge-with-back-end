const router = require('express').Router();
const { models: { Contact_Form }, } = require('../db');

// POST /api/contactform
router.post('/', async (req, res, next) => {
  try {
    console.log("in router POST before create")
    res.send(await Contact_Form.create(req.body));
  } catch (err) {
    next(err);
  }
});

// GET /api/contactform
router.get('/', async (req, res, next) => {
  try {
    const content = await Contact_Form.findAll()
    res.json(content)
  } catch (err) {
    next(err)
  }
})

module.exports = router;