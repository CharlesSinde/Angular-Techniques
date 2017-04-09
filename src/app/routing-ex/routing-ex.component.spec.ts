import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExComponent } from './routing-ex.component';

describe('RoutingExComponent', () => {
  let component: RoutingExComponent;
  let fixture: ComponentFixture<RoutingExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
