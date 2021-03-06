import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CartService } from './../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router,
    public _cartService: CartService
  ) { }

  ngOnInit() {
  }

  openCart(event) {
    this.router.navigate(['/cart']);
  }

}
