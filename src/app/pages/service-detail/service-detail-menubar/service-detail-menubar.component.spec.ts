import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailMenubarComponent } from './service-detail-menubar.component';

describe('ServiceDetailMenubarComponent', () => {
  let component: ServiceDetailMenubarComponent;
  let fixture: ComponentFixture<ServiceDetailMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDetailMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
