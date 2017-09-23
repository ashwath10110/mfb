import { Component, OnInit, Input } from '@angular/core';

import { CartService } from './../../services/cart/cart.service';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	@Input('item') _item: string;
	itemType = '';
	itemCateg = {
		1: 'exotic-vegetables',
		2: 'leafy-green-vegetables',
		3: 'fresh-fruits',
		4: 'fresh-vegetables'
	};
	itemCount = 0;

	constructor(
		private cartService: CartService
	) {
	}

	selectedItem = '';

	ngOnInit() {
	}

	selectItem(event) {
	}

	removeFromCart(event) {
		if (!this.itemType) {
			this.itemType = this._item['typeCategory'];
		}
		if (this.cartService.removeFromCart(this._item, this.itemType)) {
			this.itemCount--;
		}
	}

	getCount() {
		return this.cartService.getCountOfItem(this._item, this.itemType)
	}

	addToCart(event, item) {
		if (!this.itemType) {
			this.itemType = this._item['typeCategory'];
		}
		this.itemCount++;
		this.cartService.addToCart(this._item, this.itemType);
	}

}
