import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStepNewComponent } from './first-step-new.component';

describe('FirstStepNewComponent', () => {
  let component: FirstStepNewComponent;
  let fixture: ComponentFixture<FirstStepNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStepNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStepNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
