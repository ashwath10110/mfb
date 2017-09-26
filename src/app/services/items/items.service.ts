import { Injectable } from '@angular/core';
import { HttpWrapperService } from './../http-wrapper/http-wrapper.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptionsArgs } from '@angular/http';

@Injectable()
export class ItemsService {

	items = {
		'exotic-vegetables': [],
		'leafy-green-vegetables': [],
		'fresh-fruits': [],
		'fresh-vegetables': []
	};

	constructor(private _httpWrapperService: HttpWrapperService) {
		this._httpWrapperService.get('http://localhost:3000/api/items').subscribe((request) => {
			this.items = JSON.parse(request['data']);
			console.log(JSON.parse(request['data']));
			// console.log(request);
			// this.items=
		});
	}

	initialiseItems() {
		var itemCateg = ['exotic-vegetables', 'leafy-green-vegetables', 'fresh-fruits', 'fresh-vegetables'];

		for (var i = 0; i < itemCateg.length; i++) {
			let nameToAppend = '';
			for (var j = 1; j <= 3; j++) {
				nameToAppend = itemCateg[i];

				this.items[nameToAppend].push({
					id: j + nameToAppend,
					typeCategory: nameToAppend,
					type: i,
					name: j + nameToAppend,
					summary: nameToAppend + ' A summary will also be present And it will be about.' + j,
					price: (100 + i) * 10
				});
			}
		}
	}
}