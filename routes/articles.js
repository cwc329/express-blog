var express = require('express');
var router = express.Router();
const articleControllers = require('../controllers/articleControllers');
const categoryControllers = require('../controllers/categoryControllers');
const userControllers = require('../controllers/usersControllers');

router.get('/', articleControllers.getArticles, (req, res, next) => {
  res.render('articles', req.app.locals.viewsVariables)
});

router.get('/category/:categoryName', categoryControllers.getArticlesByCategory, (req, res, next) => {
  res.render('articles', req.app.locals.viewsVariables);
})

router.get('/id/:id', articleControllers.getOne, function(req, res, next) {
  res.render('articles', req.app.locals.viewsVariables)
});

router.get('/page/:page', articleControllers.getArticles, (req, res, next) => {
  res.render('articles', req.app.locals.viewsVariables)
});

router.get('/post', userControllers.checkPermission,(req, res, next) => {
  const viewsVariables = Object.assign(req.app.locals.viewsVariables, {isEditing: false})
  console.log(res.locals.articles[0]);
  res.render('post', viewsVariables)
});

router.get('/post/:id', userControllers.checkPermission,articleControllers.getOne, (req, res, next) => {
  const viewsVariables = Object.assign(req.app.locals.viewsVariables, {isEditing: true})
  console.log(res.locals.articles[0]);
  res.render('post', viewsVariables);
});

router.post('/post', userControllers.checkPermission,articleControllers.add, categoryControllers.setArticleCategory, (req, res, next) => {
  res.redirect('/');
});

router.post('/post/:id', userControllers.checkPermission, articleControllers.edit, categoryControllers.setArticleCategory,(req, res, next) => {
  res.redirect('/');
});

router.post('/delete', userControllers.checkPermission, articleControllers.delete, (req, res, next) => {
  res.redirect('back');
});

module.exports = router;
