import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkdistributionComponent } from './milkdistribution.component';

describe('MilkdistributionComponent', () => {
  let component: MilkdistributionComponent;
  let fixture: ComponentFixture<MilkdistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MilkdistributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilkdistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
