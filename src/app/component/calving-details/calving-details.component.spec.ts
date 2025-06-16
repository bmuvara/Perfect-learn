import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalvingDetailsComponent } from './calving-details.component';

describe('CalvingDetailsComponent', () => {
  let component: CalvingDetailsComponent;
  let fixture: ComponentFixture<CalvingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalvingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalvingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
