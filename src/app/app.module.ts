import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonService } from './services/person.service';
import { ScrollDirective } from './scroll.directive';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { NewPersonFormComponent } from './new-person-form/new-person-form.component';
import {FormsModule} from "@angular/forms";
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonsListItemComponent } from './persons-list/persons-list-item/persons-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ScrollDirective,
    PersonDetailsComponent,
    NewPersonFormComponent,
    PersonsListComponent,
    PersonsListItemComponent,
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
