import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostreturnComponent } from './costreturn.component';

describe('CostreturnComponent', () => {
  let component: CostreturnComponent;
  let fixture: ComponentFixture<CostreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostreturnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
