import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPortionComponent } from './support-portion.component';

describe('SupportPortionComponent', () => {
  let component: SupportPortionComponent;
  let fixture: ComponentFixture<SupportPortionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportPortionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportPortionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
