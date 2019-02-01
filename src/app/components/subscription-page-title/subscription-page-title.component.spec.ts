import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPageTitleComponent } from './subscription-page-title.component';

describe('SubscriptionPageTitleComponent', () => {
  let component: SubscriptionPageTitleComponent;
  let fixture: ComponentFixture<SubscriptionPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
