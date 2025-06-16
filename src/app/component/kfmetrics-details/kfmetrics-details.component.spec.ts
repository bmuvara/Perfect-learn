import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KfmetricsDetailsComponent } from './kfmetrics-details.component';

describe('KfmetricsDetailsComponent', () => {
  let component: KfmetricsDetailsComponent;
  let fixture: ComponentFixture<KfmetricsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KfmetricsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KfmetricsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
