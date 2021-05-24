import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { RatingComponent } from './components/rating/rating.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TraficComponent } from './components/trafic/trafic.component';
import { BigCgartComponent } from './components/big-cgart/big-cgart.component';
import { SmallChartComponent } from './components/small-chart/small-chart.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NoneComponent } from './components/none/none.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartsComponent } from './components/charts/charts.component';
import { SomeComponent } from './some/some.component';
import { SircleComponent } from './components/sircle/sircle.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    RatingComponent,
    ProfileComponent,
    TraficComponent,
    BigCgartComponent,
    SmallChartComponent,
    SideBarComponent,
    NoneComponent,
    NavigateComponent,
    DashboardComponent,
    ChartsComponent,
    SomeComponent,
    SircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
