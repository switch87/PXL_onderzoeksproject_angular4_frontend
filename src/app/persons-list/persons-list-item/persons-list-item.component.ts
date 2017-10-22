import {Component, Input, OnInit} from "@angular/core";
import {Person} from "../../models/person";

@Component({
  selector: 'app-persons-list-item',
  templateUrl: './persons-list-item.component.html',
  styleUrls: ['./persons-list-item.component.css']
})
export class PersonsListItemComponent implements OnInit {
  @Input() person: Person;
  @Input() selected: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
