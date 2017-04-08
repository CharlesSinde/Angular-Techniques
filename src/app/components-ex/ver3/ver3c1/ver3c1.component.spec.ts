import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ver3c1Component } from './ver3c1.component';

describe('Ver3c1Component', () => {
  let component: Ver3c1Component;
  let fixture: ComponentFixture<Ver3c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ver3c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ver3c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
