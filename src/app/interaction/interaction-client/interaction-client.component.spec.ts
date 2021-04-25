import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionClientComponent } from './interaction-client.component';

describe('InteractionClientComponent', () => {
  let component: InteractionClientComponent;
  let fixture: ComponentFixture<InteractionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
