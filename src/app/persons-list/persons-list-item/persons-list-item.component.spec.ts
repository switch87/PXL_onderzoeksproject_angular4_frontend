import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsListItemComponent } from './persons-list-item.component';

describe('PersonsListItemComponent', () => {
  let component: PersonsListItemComponent;
  let fixture: ComponentFixture<PersonsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
