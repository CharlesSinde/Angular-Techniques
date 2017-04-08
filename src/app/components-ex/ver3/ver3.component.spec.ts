import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ver3Component } from './ver3.component';

describe('Ver3Component', () => {
  let component: Ver3Component;
  let fixture: ComponentFixture<Ver3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ver3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ver3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
