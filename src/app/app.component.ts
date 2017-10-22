import {Component, OnInit} from '@angular/core';
import {Person} from './models/person';
import {PersonService} from "./services/person.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  listPersons: Person[] = null;
  title = 'app';
  persons: Person[];
  selectedPerson: Person;

 constructor(
   private personService: PersonService,
 ) {}

  getAllPersons(): void {
    this.personService.getAllPersons()
      .then(persons => {this.persons = persons;
        this.listPersons = this.persons;
      });
  }

  selectPerson(person: Person): void {
   if (this.selectedPerson === person) AppComponent.selectNoPerson();
   else this.selectedPerson = person;
  }

  static selectNoPerson(): Person {
    let person = new Person();
    person.id = -1;
    return person;
  }

  ngOnInit(): void {
    this.getAllPersons();
    this.selectedPerson = AppComponent.selectNoPerson();
  }

  onNewPersonFormChanged(formPerson: Person){
    this.listPersons = this.persons.slice();
    if (formPerson.name != "" && !isUndefined(formPerson.name))
      this.listPersons = this.listPersons.filter(person => {
        if (person.name === null) return false;
        return person.name.toLowerCase().indexOf(formPerson.name.toLowerCase()) !== -1;
      });
    if (formPerson.surname != "" && !isUndefined(formPerson.surname))
      this.listPersons = this.listPersons.filter(person => {
        if (person.surname === null) return false;
        return person.surname.toLowerCase().indexOf(formPerson.surname.toLowerCase()) !== -1;
      });
    if (formPerson.origin != "" && !isUndefined(formPerson.origin))
      this.listPersons = this.listPersons.filter(person => {
        if (person.origin === null) return false;
        return person.origin.toLowerCase().indexOf(formPerson.origin.toLowerCase()) !== -1;
      });
    if (formPerson.allegiance != "" && !isUndefined(formPerson.allegiance))
      this.listPersons = this.listPersons.filter(person => {
        if (person.allegiance === null) return false;
        return person.allegiance.toLowerCase().indexOf(formPerson.allegiance.toLowerCase()) !== -1;
      });
  }

  onPersonSelectionChanged(id: number){
    this.selectedPerson = id === -1? AppComponent.selectNoPerson(): this.persons.find(person => person.id === id);
  }

}
