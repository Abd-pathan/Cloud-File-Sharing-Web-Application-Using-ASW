
const Controller = require('../controllers/deleteController')
 
const express = require('express');
const router = express.Router();

router.get('/delete', (req, res) => {
  if (!req.session.authenticated) {
    return res.redirect('/login');
  }
  res.render("delete")
  });
  
router.post('/delete', Controller.Controller);
  
module.exports = router;