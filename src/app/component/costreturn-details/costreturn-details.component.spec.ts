import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostreturnDetailsComponent } from './costreturn-details.component';

describe('CostreturnDetailsComponent', () => {
  let component: CostreturnDetailsComponent;
  let fixture: ComponentFixture<CostreturnDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostreturnDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostreturnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
