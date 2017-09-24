import { Injectable } from '@angular/core';
import { LocalStorageService } from './../local-storage/local-storage.service';

@Injectable()
export class CartService {

	itemsInCart;
	costOfCart = 0;

	constructor(
		public _localStorageService: LocalStorageService
	) {
		let cartValue = this._localStorageService.getCartValue();
		if (!cartValue) {
			this.initialisedCart();
		} else {
			this.itemsInCart = cartValue;
		}
		this.costOfCart = this.getTotalCostOfCart();
	}

	saveToStorage() {
		this._localStorageService.setCartValue(this.itemsInCart);
	}

	initialisedCart() {
		this.itemsInCart = {
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
		this.saveToStorage();
	}

	addToCart(item, typeOfItem) {
		this.itemsInCart.items[typeOfItem].push(item);
		this.itemsInCart[typeOfItem]++;
		this.itemsInCart.totalCount++;
		this.saveToStorage();
		this.costOfCart += item.price;
	}

	getTotalCostOfCart() {

		// let itemTypes = ['exotic-vegetables', 'leafy-green-vegetables', 'fresh-fruits', 'fresh-vegetables'];

		// let cost = 0;

		// for (var i = 0; i < itemTypes[i].length; i++) {

		// 	var type_ = itemTypes[i];

		// 	for (var j = 0; j < this.itemsInCart.items[type_].length; j++) {
		// 		var currentItem = this.itemsInCart.items[type_][j];
		// 		cost = cost + currentItem.price;
		// 	}

		// }
		return 0;
	}

	removeFromCart(item, itemType) {
		itemType = item.typeCategory;

		if (this.itemsInCart[itemType]) {
			var items = this.itemsInCart.items[itemType];
			for (var i = 0; i < items.length; i++) {
				if (items[i].name == item.name) {
					items.splice(-1, 1);
					this.itemsInCart[itemType]--;
					this.itemsInCart.totalCount--;
					this.saveToStorage();
					this.costOfCart -= items[i].price;
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
