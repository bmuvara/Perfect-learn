import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedcostDetailsComponent } from './feedcost-details.component';

describe('FeedcostDetailsComponent', () => {
  let component: FeedcostDetailsComponent;
  let fixture: ComponentFixture<FeedcostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedcostDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedcostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
