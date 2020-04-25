import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './pricing/pricing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TopbuttonComponent } from './topbutton/topbutton.component';
import { ApplyComponent } from './apply/apply.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    TopbuttonComponent,
    ApplyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
