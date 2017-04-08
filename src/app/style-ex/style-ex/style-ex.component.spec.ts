import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleExComponent } from './style-ex.component';

describe('StyleExComponent', () => {
  let component: StyleExComponent;
  let fixture: ComponentFixture<StyleExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
