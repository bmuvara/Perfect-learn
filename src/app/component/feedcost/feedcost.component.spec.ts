import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedcostComponent } from './feedcost.component';

describe('FeedcostComponent', () => {
  let component: FeedcostComponent;
  let fixture: ComponentFixture<FeedcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedcostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
