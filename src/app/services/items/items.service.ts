import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class Deal {
	id: number;
	name: string;
	description: string;
	originalPrice: number;
	salePrice: number;
}

@Injectable()
export class ItemsService {

	items = {
		'exotic-vegetables': [],
		'leafy-green-vegetables': [],
		'fresh-fruits': [],
		'fresh-vegetables': []
	};

	private publicDealsUrl = 'http://localhost:3000/api/items';
	private privateDealsUrl = 'http://localhost:3000/api/items';

	constructor(private http: Http) { }

	// Implement a method to get the public deals
	getPublicDeals() {
		return this.http
			.get(this.publicDealsUrl)
			.toPromise()
			.then(response => response.json() as Deal[])
			.catch(this.handleError);
	}

	// Implement a method to get the private deals
	getPrivateDeals() {
		return this.http
			.get(this.privateDealsUrl)
			.toPromise()
			.then(response => response.json() as Deal[])
			.catch(this.handleError);
	}

	// Implement a method to handle errors if any
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	getData() {
		return this.http.get('http://localhost:3000/api/items');
	}
}

// @Injectable()
// export class DealService {
//   // Define the routes we are going to interact with
//   private publicDealsUrl = 'http://localhost:3001/api/deals/public';
//   private privateDealsUrl = 'http://localhost:3001/api/deals/private';

//   constructor(private http: Http) { }

//   // Implement a method to get the public deals
//   getPublicDeals() {
//     return this.http
//       .get(this.publicDealsUrl)
//       .toPromise()
//       .then(response=>response.json() as Deal[])
//       .catch(this.handleError);
//   }

//   // Implement a method to get the private deals
//   getPrivateDeals() {
//     return this.http
//       .get(this.privateDealsUrl)
//       .toPromise()
//       .then(response=>response.json() as Deal[])
//       .catch(this.handleError);
//   }

//   // Implement a method to handle errors if any
//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error);
//     return Promise.reject(error.message || error);
//   }
// }
