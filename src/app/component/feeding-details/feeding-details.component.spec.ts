import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingDetailsComponent } from './feeding-details.component';

describe('FeedingDetailsComponent', () => {
  let component: FeedingDetailsComponent;
  let fixture: ComponentFixture<FeedingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
