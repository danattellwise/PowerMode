import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerModeComponent } from './power-mode.component';

describe('PowerModeComponent', () => {
  let component: PowerModeComponent;
  let fixture: ComponentFixture<PowerModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
