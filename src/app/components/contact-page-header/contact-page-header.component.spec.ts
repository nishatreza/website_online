import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageHeaderComponent } from './contact-page-header.component';

describe('ContactPageHeaderComponent', () => {
  let component: ContactPageHeaderComponent;
  let fixture: ComponentFixture<ContactPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
