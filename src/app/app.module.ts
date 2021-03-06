import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

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
import { CartService } from './services/cart/cart.service';
import { ItemsService } from './services/items/items.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';

import { CarousalComponent } from './components/carousal/carousal.component';
import { FreshVegetablesComponent } from './components/fresh-vegetables/fresh-vegetables.component';
import { ExoticVegetablesComponent } from './components/exotic-vegetables/exotic-vegetables.component';
import { LeafyGreenVegetablesComponent } from './components/leafy-green-vegetables/leafy-green-vegetables.component';
import { FreshFruitsComponent } from './components/fresh-fruits/fresh-fruits.component';
import { ItemComponent } from './components/item/item.component';
import { ItemPreviewComponent } from './components/item-preview/item-preview.component';

import { DialogModule } from 'primeng/primeng';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AuthGuard } from './_guards/index';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';

//Http-wrapper
// import { HttpWrapperModule, HttpWrapper } from '@briisk/http-wrapper';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'exotic-vegetables', component: ExoticVegetablesComponent },
	{ path: 'leafy-green-vegetables', component: LeafyGreenVegetablesComponent },
	{ path: 'fresh-fruits', component: FreshFruitsComponent },
	{ path: 'fresh-vegetables', component: FreshVegetablesComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'checkout', component: CheckoutComponent },
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
		CarousalComponent,
		FreshVegetablesComponent,
		ExoticVegetablesComponent,
		LeafyGreenVegetablesComponent,
		FreshFruitsComponent,
		ItemComponent,
		ItemPreviewComponent,
		CheckoutComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			appRoutes
		),
		DialogModule,
		HttpModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule
	],
	providers: [
		AppService,
		LocalStorageService,
		CartService,
		ItemsService,
		UserService,
		AuthenticationService,
		AuthGuard,
		BaseRequestOptions
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
