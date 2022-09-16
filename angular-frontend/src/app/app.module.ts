import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { ComponentsheaderComponent } from './componentsheader/componentsheader.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {aboutUsUrl, defaultUrl, homeUrl, tripsUrl} from "./models/urls";

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    ComponentsheaderComponent,
    HeaderComponent,
    NavigationComponent,
    AboutusComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    RouterModule.forRoot([
      { path:defaultUrl, component:HomeComponent},
      { path:homeUrl, component:HomeComponent},
      { path:aboutUsUrl, component:AboutusComponent},
      { path:tripsUrl, component:TripListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
