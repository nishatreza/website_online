import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteBuilderComponent } from './website-builder.component';

describe('WebsiteBuilderComponent', () => {
  let component: WebsiteBuilderComponent;
  let fixture: ComponentFixture<WebsiteBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
