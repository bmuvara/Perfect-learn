import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnCourseComponent } from './own-course.component';

describe('OwnCourseComponent', () => {
  let component: OwnCourseComponent;
  let fixture: ComponentFixture<OwnCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
