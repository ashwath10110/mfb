import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../../services/items/items.service';
import { CartService } from './../../services/cart/cart.service';

@Component({
	selector: 'app-fresh-fruits',
	templateUrl: './fresh-fruits.component.html',
	styleUrls: ['./fresh-fruits.component.css']
})
export class FreshFruitsComponent implements OnInit {

	listOfFreshFruits = [];
	typeName = 'fresh-fruits';

	constructor(
		public _itemsService: ItemsService,
		public _cartService: CartService
	) {
		this.listOfFreshFruits = this._itemsService.items[this.typeName];
	}

	ngOnInit() {
	}

}
