// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//CORS
app.use(function(req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200/');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));







// const express = require('express');
// const app = express();
// // Import the required dependencies
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// // We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header
// const authCheck = jwt({
//   secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/.well-known/jwks.json"
//     }),
//     // This is the identifier we set when we created the API
//     audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
//     issuer: "https://{YOUR-AUTH0-DOMAIN}.auth0.com/",
//     algorithms: ['RS256']
// });

// app.get('/api/deals/public', (req, res)=>{
//   let deals = [
//     // Array of public deals
//   ];
//   res.json(deals);
// })

// // For the private route, we'll add this authCheck middleware
// app.get('/api/deals/private', authCheck, (req,res)=>{
//   let deals = [
//     // Array of private deals
//   ];
//   res.json(deals);
// })

// app.listen(3001);
// console.log('Listening on localhost:3000');