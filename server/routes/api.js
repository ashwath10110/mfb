const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
	res.send('api works');
});

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