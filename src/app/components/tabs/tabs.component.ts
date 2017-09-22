import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app/app.service';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

	constructor(
		private appService: AppService
	) { }

	ngOnInit() {
		// this.appService.selectedTab = ''
	}

	openTab(item) {
		console.log(item);
	}

}
