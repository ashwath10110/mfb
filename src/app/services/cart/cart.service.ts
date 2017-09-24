import { Injectable } from '@angular/core';
import { LocalStorageService } from './../local-storage/local-storage.service';

@Injectable()
export class CartService {

	itemsInCart;

	constructor(
		public _localStorageService: LocalStorageService
	) {
		let cartValue = this._localStorageService.getCartValue();

		if (!cartValue) {

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
		} else {
			this.itemsInCart = cartValue;
		}
	}

	saveToStorage() {
		this._localStorageService.setCartValue(this.itemsInCart);
	}

	addToCart(item, typeOfItem) {
		this.itemsInCart.items[typeOfItem].push(item);
		this.itemsInCart[typeOfItem]++;
		this.itemsInCart.totalCount++;
		this.saveToStorage();
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
