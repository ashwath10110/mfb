import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  goToCheckout(event){
	this.router.navigate(['/checkout']);
  }

}
