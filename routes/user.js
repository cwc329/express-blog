const express = require('express');
const app = require('../app');
const router = express.Router();
const userControllers = require('../controllers/usersControllers');
const session = require('express-session');

router.post('/login', userControllers.login, (req, res, next) => {
  console.log(res.locals)
  res.redirect('back');
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

/*
router.post('/register', userControllers.register, (req, res, next) => {
  res.redirect('/');
})
*/

module.exports = router;