import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from './../../services/items/items.service';
import { CartService } from './../../services/cart/cart.service';

@Component({
	selector: 'app-fresh-vegetables',
	templateUrl: './fresh-vegetables.component.html',
	styleUrls: ['./fresh-vegetables.component.css']
})
export class FreshVegetablesComponent implements OnInit {

	listOfFreshVegetables = [];
	typeName = 'fresh-vegetables';
	
	constructor(
		public _itemsService: ItemsService,
		public _cartService: CartService
	) {
		this.listOfFreshVegetables = this._itemsService.items[this.typeName];
	}
	
	ngOnInit() {
	}

}
