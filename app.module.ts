import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { StaffComponent } from './components/staff/staff.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PricesComponent } from './components/prices/prices.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    StaffComponent,
    GalleryComponent,
    PricesComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
