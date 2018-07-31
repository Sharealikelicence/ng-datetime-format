import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDatetimeFormatComponent } from './ng-datetime-format.component';

describe('NgDatetimeFormatComponent', () => {
  let component: NgDatetimeFormatComponent;
  let fixture: ComponentFixture<NgDatetimeFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDatetimeFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDatetimeFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
