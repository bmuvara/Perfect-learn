import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorycostDetailsComponent } from './inventorycost-details.component';

describe('InventorycostDetailsComponent', () => {
  let component: InventorycostDetailsComponent;
  let fixture: ComponentFixture<InventorycostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventorycostDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorycostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
