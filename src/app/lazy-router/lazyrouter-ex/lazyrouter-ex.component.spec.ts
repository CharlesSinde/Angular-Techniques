import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyrouterExComponent } from './lazyrouter-ex.component';

describe('LazyrouterExComponent', () => {
  let component: LazyrouterExComponent;
  let fixture: ComponentFixture<LazyrouterExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyrouterExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyrouterExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
