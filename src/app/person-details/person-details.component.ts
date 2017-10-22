import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../models/person";
import {PersonService} from "../services/person.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  image: string;
  private standardImg: string = "assets/img/dragon.jpg";

  get selectedPerson(): Person {
    return this._selectedPerson;
  }

  @Input()
  set selectedPerson(person: Person) {
    this._selectedPerson = person;
    if (person.id === -1) this.image = this.standardImg;
    else this.personService.getPersonImg(person.id)
      .then(img => this.image = "data:image/jpeg;base64, " + img)
      .catch(error => this.image = this.standardImg);
  }

  private _selectedPerson: Person;

  constructor(
    private personService: PersonService,
    public sanitizer:DomSanitizer
  ) { }

  ngOnInit() {
  }

}
