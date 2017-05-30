// var express = require('express');
// var app = express();
// var jwt = require('express-jwt');
// var jwks = require('jwks-rsa');

// var port = process.env.PORT || 3000;

// var jwtCheck = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: "https://lavanyaauth.auth0.com/.well-known/jwks.json"
//     }),
//     audience: 'localhost',
//     issuer: "https://lavanyaauth.auth0.com/",
//     algorithms: ['RS256']
// });

// app.use(jwtCheck);

// app.get('/hello', function (req, res) {
//   res.send('hiiiiii');
// });

// app.listen(port);


var express = require('express');
var app = express();
var jwt = require('express-jwt');

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
  secret: 'thfw9iG5gA74bMow7aP0MldYtmEbKGnU-saHEweJw0E2QG9DiKuhsytIVabvINdE',
  audience: 'E-6-A9D_lx-jCENQIUz_FTP97BCGfVuz',
  issuer: "https://lavanyaauth.auth0.com/"
});

// enforce on all endpoints
app.use(jwtCheck);

app.get('/hello', function (req, res) {
  res.send("{\"hello\":\"world\"}");
});

app.listen(port);

console.log('Running on port ', port);