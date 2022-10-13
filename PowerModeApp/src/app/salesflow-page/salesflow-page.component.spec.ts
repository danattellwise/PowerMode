import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesflowPageComponent } from './salesflow-page.component';

describe('SalesflowPageComponent', () => {
  let component: SalesflowPageComponent;
  let fixture: ComponentFixture<SalesflowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesflowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesflowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
