import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorycostComponent } from './inventorycost.component';

describe('InventorycostComponent', () => {
  let component: InventorycostComponent;
  let fixture: ComponentFixture<InventorycostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventorycostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorycostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
