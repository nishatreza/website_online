import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavouriteServicesComponent } from './user-favourite-services.component';

describe('UserFavouriteServicesComponent', () => {
  let component: UserFavouriteServicesComponent;
  let fixture: ComponentFixture<UserFavouriteServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavouriteServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavouriteServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
