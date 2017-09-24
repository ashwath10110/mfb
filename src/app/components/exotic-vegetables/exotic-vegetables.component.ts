import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../../services/items/items.service';
import { CartService } from './../../services/cart/cart.service';

@Component({
	selector: 'app-exotic-vegetables',
	templateUrl: './exotic-vegetables.component.html',
	styleUrls: ['./exotic-vegetables.component.css']
})
export class ExoticVegetablesComponent implements OnInit {

	listOfExoticVegetables = [];
	selectedItem = '';
	typeName = 'exotic-vegetables';

	constructor(
		public _itemsService: ItemsService,
		public _cartService: CartService
	) {
		this.listOfExoticVegetables = this._itemsService.items[this.typeName];
	}

	ngOnInit() {
	}

	selectItem(event, item) {
		this.selectedItem = item;
	}
}
