import { Injectable } from '@angular/core';

@Injectable()
export class ItemsService {

	items = {
		'exotic-vegetables': [],
		'leafy-green-vegetables': [],
		'fresh-fruits': [],
		'fresh-vegetables': []
	};

	constructor() {
		this.initialiseItems();
	}

	initialiseItems() {
		var itemCateg = ['exotic-vegetables', 'leafy-green-vegetables', 'fresh-fruits', 'fresh-vegetables'];

		for (var i = 0; i < itemCateg.length; i++) {
			let nameToAppend = '';
			for (var j = 1; j <= 3; j++) {
				nameToAppend = itemCateg[i];

				this.items[nameToAppend].push({
					id: j + nameToAppend,
					typeCategory: nameToAppend,
					type: i,
					name: j + nameToAppend,
					summary: nameToAppend + ' A summary will also be present And it will be about.' + j,
					price: (100 + i) * 10
				});
			}
		}
	}

}