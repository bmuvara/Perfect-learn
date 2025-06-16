import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourcostComponent } from './labourcost.component';

describe('LabourcostComponent', () => {
  let component: LabourcostComponent;
  let fixture: ComponentFixture<LabourcostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabourcostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabourcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
