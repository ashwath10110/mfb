const express = require('express');
const router = express.Router();
var request = require('request');

/* GET api listing. */
router.get('/', (req, res) => {

	// var url = "http://198.24.149.4/API/pushsms.aspx?loginID=7382365275&password=905103&mobile=7013091076&text=HI HOW ARE YOU&senderid=DEMOOO&route_id=7&Unicode=0";


	// request(url, function(error, response, body) {
	// 	if (!error && response.statusCode == 200) {
	// 		console.log(body) // Print the google web page.
	// 	}
	// })
	// console.log("Done");
	res.send('api works');
});


router.post('/authenticate', (req, res) => {

	let testUser = {
		username: 'test',
		password: 'test',
		firstName: 'Test',
		lastName: 'User'
	};

	var username = req.params['name'];
        password = req.body.password;

        console.log(req.body.name);
        console.log(req.query);


	if (username === testUser.username && password === testUser.password) {
		res.send({
			status: 200,
			body: {
				token: 'fake-jwt-token'
			}
		});
	}else{
		res.send({
			status: 200
		});
	}



	// console.log(res);

	// let params = JSON.parse(connection.request.getBody());

	// // check user credentials and return fake jwt token if valid
	// if (params.username === testUser.username && params.password === testUser.password) {
	// 	connection.mockRespond(new Response(
	// 		new ResponseOptions({
	// 			status: 200,
	// 			body: {
	// 				token: 'fake-jwt-token'
	// 			}
	// 		})
	// 	));
	// } else {
	// 	connection.mockRespond(new Response(
	// 		new ResponseOptions({
	// 			status: 200
	// 		})
	// 	));
	// }

	// res.send({
	// 	status: true,
	// 	statusCode: 200,
	// 	errorMessage: [],
	// 	data: JSON.stringify(initialiseItems()),
	// });
});

router.get('/users', (req, res) => {

	console.log(res);

	// let params = JSON.parse(connection.request.getBody());

	// // check user credentials and return fake jwt token if valid
	// if (params.username === testUser.username && params.password === testUser.password) {
	// 	connection.mockRespond(new Response(
	// 		new ResponseOptions({
	// 			status: 200,
	// 			body: {
	// 				token: 'fake-jwt-token'
	// 			}
	// 		})
	// 	));
	// } else {
	// 	connection.mockRespond(new Response(
	// 		new ResponseOptions({
	// 			status: 200
	// 		})
	// 	));
	// }

	// res.send({
	// 	status: true,
	// 	statusCode: 200,
	// 	errorMessage: [],
	// 	data: JSON.stringify(initialiseItems()),
	// });

	res.send('api works');
});

let testUser = {
	username: 'test',
	password: 'test',
	firstName: 'Test',
	lastName: 'User'
};


function initialiseItems() {
	var items = {
		'exotic-vegetables': [],
		'leafy-green-vegetables': [],
		'fresh-fruits': [],
		'fresh-vegetables': []
	};

	var itemCateg = [
		'exotic-vegetables',
		'leafy-green-vegetables',
		'fresh-fruits',
		'fresh-vegetables'
	];


	for (var i = 0; i < itemCateg.length; i++) {
		let nameToAppend = '';
		for (var j = 1; j <= 3; j++) {
			nameToAppend = itemCateg[i];

			items[nameToAppend].push({
				id: j + nameToAppend,
				typeCategory: nameToAppend,
				type: i,
				name: j + nameToAppend,
				summary: nameToAppend + ' A summary will also be present And it will be about.' + j,
				price: (100 + i) * 10
			});
		}
	}
	return items;
}

/* GET Items. */
router.get('/items', (req, res) => {

	// var ans = initialiseItems();

	// var response_ = {
	// 	status: true,
	// 	statusCode: 200,
	// 	errorMessage: [],
	// 	data: JSON.stringify(initialiseItems()),
	// };

	res.send({
		status: true,
		statusCode: 200,
		errorMessage: [],
		data: JSON.stringify(initialiseItems()),
	});
});

module.exports = router;