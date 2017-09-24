import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CartService } from './../../services/cart/cart.service';
// import { LocalStorageService } from './../../local-storage/local-storage.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	cartValue = '';

	constructor(public router: Router,
		public _cartService: CartService
	) {
		this.cartValue = this._cartService.itemsInCart;

		debugger;

		// 		this.cartValue['exotic-vegetables'],
		// 		.'leafy-green-vegetables': 0,
		// 		.'fresh-fruits': 0,
		// 		.'fresh-vegetables': 0,
		// 		'totalCount': 0,
		// 		items: {
		// 			'exotic-vegetables': [],
		// 			'leafy-green-vegetables': [],
		// 			'fresh-fruits': [],
		// 			'fresh-vegetables': []
		// 		}
		// 	};
	}

	ngOnInit() {
	}

	clearCart(){
		this._cartService.initialisedCart();
		this.cartValue = this._cartService.itemsInCart;
	}

	goToCheckout(event) {
		this.router.navigate(['/checkout']);
	}

}
