import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFooterComponent } from './category-footer.component';

describe('CategoryFooterComponent', () => {
  let component: CategoryFooterComponent;
  let fixture: ComponentFixture<CategoryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
