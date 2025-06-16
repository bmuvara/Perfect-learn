import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkdistributionDetailsComponent } from './milkdistribution-details.component';

describe('MilkdistributionDetailsComponent', () => {
  let component: MilkdistributionDetailsComponent;
  let fixture: ComponentFixture<MilkdistributionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MilkdistributionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkdistributionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
