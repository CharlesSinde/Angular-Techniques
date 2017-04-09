import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildExComponent } from './child-ex.component';

describe('ChildExComponent', () => {
  let component: ChildExComponent;
  let fixture: ComponentFixture<ChildExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
