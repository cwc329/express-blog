var express = require('express');
var router = express.Router();
const categoryControllers = require('../controllers/categoryControllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('categories', req.app.locals.viewsVariables);
});

router.get('/:categoryName', categoryControllers.getArticlesByCategory, (req, res, next) => {
  res.render('categories', req.app.locals.viewsVariables)
})

module.exports = router;
