import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';

import { MaterialModule } from './shared/modules';

import {
  FooterComponent,
  HeaderComponent,
  MenuListComponent,
  SideMenuComponent,
} from './shared/components';

import { LandingComponent } from './home/landing/landing.component';
import { DesignsComponent } from './home/designs/designs.component';
import { PricingComponent } from './home/pricing/pricing.component';
import { ContactComponent } from './home/contact/contact.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { HowWorksComponent } from './home/how-works/how-works.component';
import { RoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MenuListComponent,
    SideMenuComponent,
    FooterComponent,
    LandingComponent,
    DesignsComponent,
    PricingComponent,
    ContactComponent,
    TestimonialsComponent,
    HowWorksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
