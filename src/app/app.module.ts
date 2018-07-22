import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Main
import { AppComponent } from './app.component';
import { MaterialModules } from './modules/material';
import { AppRoutingModule } from './app-routing.module';
// Layout
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
// Services
import { SERVICE_MODULES } from './services';
// Components
import { HomeComponent } from './comp/home/home.component';
import { ProductListComponent } from './comp/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    MaterialModules
  ],
  providers: [SERVICE_MODULES],
  bootstrap: [AppComponent]
})
export class AppModule { }
