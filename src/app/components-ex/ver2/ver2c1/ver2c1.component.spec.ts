import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ver2c1Component } from './ver2c1.component';

describe('Ver2c1Component', () => {
  let component: Ver2c1Component;
  let fixture: ComponentFixture<Ver2c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ver2c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ver2c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
