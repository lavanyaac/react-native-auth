var express = require('express');
var router = express.Router();

var passport = require('passport');
//var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var request = require('request');



// var env = {
//   AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
//   AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
//   AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
// };

console.log("in routes");

router.get('/', function(req, res, next) {
	console.log("in /");
  res.send('index', { env: env });
});


router.get('/failed', function(req, res){
res.send('fail');
});

router.get('/polls', function(req, res){
	console.log("in polls");

	passport.authenticate('auth0', { failureRedirect: '/failed' }),
  function(req, res) {
  	console.log("in callback");
  	console.log("return to",req.session.returnTo);
    
  
	
    res.send('hello world!!!');
  }

})



router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
  	console.log("in callback");
  	console.log("return to",req.session.returnTo);
    res.redirect(req.session.returnTo || '/polls');
  });

module.exports = router;
