const Controller = require('../controllers/logInController')

const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render("login")
  });
  
router.post('/login', Controller.Controller);
  
module.exports = router;