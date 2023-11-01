var express = require('express');
var router = express.Router();
   
const Controller = require('../controllers/uploadController')

router.get('/upload', (req, res) => {
    if (!req.session.authenticated) {
      return res.redirect('/login');
    }
    res.render("index")
  });
   
router.post('/upload',Controller.Controller)

module.exports = router;