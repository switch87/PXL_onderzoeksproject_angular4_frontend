import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Person} from "../models/person";

@Component({
  selector: 'app-new-person-form',
  templateUrl: './new-person-form.component.html',
  styleUrls: ['./new-person-form.component.css']
})
export class NewPersonFormComponent implements OnInit {
  @Output() onChanged = new EventEmitter<Person>();
  @Output() onNewPersonSaved = new EventEmitter<Person>();
  person: Person = new Person();

  constructor() {
  }

  ngOnInit() {

    this.person = new Person();
  }

  onFormChanged() {
    this.onChanged.emit(this.person);
  }

  onResetFormClicked() {
    this.person = new Person();
    this.onFormChanged();
  }

  onSubmitClicked(){
    this.onNewPersonSaved.emit(this.person);
    this.onResetFormClicked();
  }

}
