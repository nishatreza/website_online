import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepPageComponent } from './first-step-page.component';

describe('FirstStepPageComponent', () => {
  let component: FirstStepPageComponent;
  let fixture: ComponentFixture<FirstStepPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
