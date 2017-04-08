import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsExComponent } from './components-ex.component';

describe('ComponentsExComponent', () => {
  let component: ComponentsExComponent;
  let fixture: ComponentFixture<ComponentsExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
