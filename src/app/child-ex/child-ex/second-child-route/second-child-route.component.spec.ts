import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChildRouteComponent } from './second-child-route.component';

describe('SecondChildRouteComponent', () => {
  let component: SecondChildRouteComponent;
  let fixture: ComponentFixture<SecondChildRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChildRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChildRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
