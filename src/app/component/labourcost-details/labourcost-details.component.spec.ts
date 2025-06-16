import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourcostDetailsComponent } from './labourcost-details.component';

describe('LabourcostDetailsComponent', () => {
  let component: LabourcostDetailsComponent;
  let fixture: ComponentFixture<LabourcostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabourcostDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourcostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
