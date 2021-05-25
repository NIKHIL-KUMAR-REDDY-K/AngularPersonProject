import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CreatePersonComponent } from './create-person/create-person.component';
//import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    EditDetailsComponent,
    DisplayDetailsComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
