import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../../services/items/items.service';
import { CartService } from './../../services/cart/cart.service';

@Component({
	selector: 'app-leafy-green-vegetables',
	templateUrl: './leafy-green-vegetables.component.html',
	styleUrls: ['./leafy-green-vegetables.component.css']
})
export class LeafyGreenVegetablesComponent implements OnInit {

	listOfLeafyGreenVegetables = [];
	typeName = 'leafy-green-vegetables';

	constructor(
		private _itemsService: ItemsService,
		private _cartService: CartService
	) {
		this.listOfLeafyGreenVegetables = this._itemsService.items[this.typeName];
	}

	ngOnInit() {
	}

}
