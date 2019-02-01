import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLogModalComponent } from './back-log-modal.component';

describe('BackLogModalComponent', () => {
  let component: BackLogModalComponent;
  let fixture: ComponentFixture<BackLogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackLogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackLogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
