import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Person} from "../models/person";

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {
  selectedPerson: number;
  @Input() persons: Person[];
  @Output() onPersonSelectionChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.selectedPerson = -1;
  }

  onSelectPerson(person: Person): void {
    this.selectedPerson = person.id === this.selectedPerson? -1 : person.id;
    this.onPersonSelectionChanged.emit(this.selectedPerson);
  }

}
