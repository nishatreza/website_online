import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsPaginationComponent } from './graphics-pagination.component';

describe('GraphicsPaginationComponent', () => {
  let component: GraphicsPaginationComponent;
  let fixture: ComponentFixture<GraphicsPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
