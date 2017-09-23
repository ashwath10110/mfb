import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

	itemsInCart = {
		'exotic-vegetables': 0,
		'leafy-green-vegetables': 0,
		'fresh-fruits': 0,
		'fresh-vegetables': 0,
		'totalCount': 0,
		items: {
			'exotic-vegetables': [],
			'leafy-green-vegetables': [],
			'fresh-fruits': [],
			'fresh-vegetables': []
		}
	};

	constructor() {
	}

	addToCart(item, typeOfItem) {
		this.itemsInCart.items[typeOfItem].push(item);
		this.itemsInCart[typeOfItem]++;
		this.itemsInCart.totalCount++;
	}

	removeFromCart(item, itemType) {
		itemType = item.typeCategory;

		if (this.itemsInCart[itemType]) {
			var items = this.itemsInCart.items[itemType];
			for (var i = 0; i < items.length; i++) {
				if (items[i].name == item.name) {
					this.itemsInCart.items[itemType].splice(-1, 1);
					this.itemsInCart[itemType]--;
					this.itemsInCart.totalCount--;
					return true;
				}
			}
		}
		return false;
	}

	getCountOfItem(item, itemType) {
		itemType = item.typeCategory;
		var items = this.itemsInCart.items[itemType];
		var count = 0;
		for (var i = 0; i < items.length; i++) {
			if (items[i].name == item.name) {
				count++;
			}
		}
		return count;
	}

}
