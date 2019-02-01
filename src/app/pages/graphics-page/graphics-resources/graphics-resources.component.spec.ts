import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsResourcesComponent } from './graphics-resources.component';

describe('GraphicsResourcesComponent', () => {
  let component: GraphicsResourcesComponent;
  let fixture: ComponentFixture<GraphicsResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicsResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
