import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KfmetricsComponent } from './kfmetrics.component';

describe('KfmetricsComponent', () => {
  let component: KfmetricsComponent;
  let fixture: ComponentFixture<KfmetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KfmetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KfmetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
