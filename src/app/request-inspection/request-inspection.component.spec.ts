import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInspectionComponent } from './request-inspection.component';

describe('RequestInspectionComponent', () => {
  let component: RequestInspectionComponent;
  let fixture: ComponentFixture<RequestInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
