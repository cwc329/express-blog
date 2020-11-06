var express = require('express');
var router = express.Router();
const articleControllers = require('../controllers/articleControllers');
const categoriesControllers = require('../controllers/categoryControllers');

/* GET home page. */
router.get('/', articleControllers.getArticles, function(req, res, next) {
  //console.log(res.locals);
  res.render('index', req.app.locals.viewsVariables);
});

module.exports = router;
