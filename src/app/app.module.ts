import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Survey1Component } from './survey1/survey1.component';

const appRoutes: Routes = [
  { path: '', redirectTo : '/home', pathMatch:'full' },{path:'home', component: HomeComponent },{path:'survey1',component:Survey1Component}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,  HomeComponent, Survey1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
export class AppRoutingModule { }
