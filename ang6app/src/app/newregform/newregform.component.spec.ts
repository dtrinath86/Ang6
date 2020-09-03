import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregformComponent } from './newregform.component';

describe('NewregformComponent', () => {
  let component: NewregformComponent;
  let fixture: ComponentFixture<NewregformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewregformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
