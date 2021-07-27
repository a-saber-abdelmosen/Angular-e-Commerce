import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './NavBar/nav-bar/nav-bar.component';
import { StoreComponent } from './Store/store/store.component';
import { ProductComponent } from './Store/product/product.component';
import { ProductListComponent } from './Store/product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { BrandComponent } from './Admin/brand/Index/brand.component';
import { HeighSaledPRoductListComponent } from './heigh-saled-product-list/heigh-saled-product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { WishlistDetailsComponent } from './wishlist-details/wishlist-details.component';
import { AddBrandComponent } from './Admin/brand/add-brand/add-brand.component';
import { EditBrandComponent } from './Admin/brand/edit-brand/edit-brand.component';
import { CartComponent } from './header/cart/cart.component';
import { CartProductComponent } from './header/cart/cart-product/cart-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './header/loader/loader.component';
import { LoaderInterceptor } from './loader/loader.interceptor';


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
    WishlistDetailsComponent,
    AddBrandComponent,
    EditBrandComponent,
    CartComponent,
    CartProductComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TooltipModule.forRoot(),
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
