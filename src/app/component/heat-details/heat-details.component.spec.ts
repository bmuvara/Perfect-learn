import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatDetailsComponent } from './heat-details.component';

describe('HeatDetailsComponent', () => {
  let component: HeatDetailsComponent;
  let fixture: ComponentFixture<HeatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeatDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
