import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	constructor() { }

	selectedItem = '';

	ngOnInit() {
	}

	selectItem(event, item) {
		this.selectedItem = item;
		console.log(item);

	}
}
