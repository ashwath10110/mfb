import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fresh-fruits',
  templateUrl: './fresh-fruits.component.html',
  styleUrls: ['./fresh-fruits.component.css']
})
export class FreshFruitsComponent implements OnInit {

	listOfFreshFruits = [];

	numberOfItems = 100;

	constructor() {

		for (var i = 0; i < this.numberOfItems; i++) {
			this.listOfFreshFruits.push({});;
		}

	}

  ngOnInit() {
  }

}
