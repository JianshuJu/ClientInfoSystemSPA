import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionEmployeeComponent } from './interaction-employee.component';

describe('InteractionEmployeeComponent', () => {
  let component: InteractionEmployeeComponent;
  let fixture: ComponentFixture<InteractionEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
