import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { PagenotfoundComponent } from './components/Pagenotfound/Pagenotfound.component';

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabsComponent } from './components/tabs/tabs.component';

// Services
import { AppService } from './services/app/app.service';
import { CarousalComponent } from './components/carousal/carousal.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'cart', component: CartComponent },
	{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CartComponent,
		PagenotfoundComponent,
		NavbarComponent,
		FooterComponent,
		TabsComponent,
		CarousalComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes
		)
	],
	providers: [AppService],
	bootstrap: [AppComponent]
})
export class AppModule { }
