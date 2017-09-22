import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-exotic-vegetables',
	templateUrl: './exotic-vegetables.component.html',
	styleUrls: ['./exotic-vegetables.component.css']
})
export class ExoticVegetablesComponent implements OnInit {

	listOfExoticVegetables = [];

	numberOfItems = 100;

	constructor() {

		for (var i = 0; i < this.numberOfItems; i++) {
			this.listOfExoticVegetables.push({});;
		}

	}

	ngOnInit() {
	}

}
