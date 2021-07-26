import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './NavBar/nav-bar/nav-bar.component';
import { StoreComponent } from './Store/store/store.component';
import { ProductComponent } from './Store/product/product.component';
import { ProductListComponent } from './Store/product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { BrandComponent } from './Admin/brand/brand.component';
import { HeighSaledPRoductListComponent } from './heigh-saled-product-list/heigh-saled-product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { WishlistDetailsComponent } from './wishlist-details/wishlist-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    HeaderComponent,
    NavBarComponent,
    StoreComponent,
    ProductComponent,
    ProductListComponent,
    DetailsComponent,
    HeighSaledPRoductListComponent,
    HomePageComponent,
    BrandComponent,
    CartDetailsComponent,
    WishlistDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
