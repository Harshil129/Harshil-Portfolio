var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', (req, res, next) => {res.render('about', 
     { 
        email: "contact@company.com",
        title: "About our Project"
     });
  });

module.exports = router;

module.exports = router;
