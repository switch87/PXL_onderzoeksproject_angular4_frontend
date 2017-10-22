import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Person} from "../models/person";

@Injectable()
export class PersonService {

  private personUri = "http://localhost:5000/api/person/";

  constructor(private http: Http) { }

  getAllPersons(): Promise<Person[]> {
    return this.http.get(this.personUri)
      .toPromise()
      .then(response => response.json() as Person[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getPersonImg(id: number){
    return this.http.get(this.personUri + id + "/image/")
      .toPromise().then(response => response.text() as string)
  }
}
