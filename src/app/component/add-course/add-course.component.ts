import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {AuthService} from '../../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {

  addForm!:FormGroup

  Courses: any []=[]; 

  successMessage = '';

  courseDetails: { courseName: string; addChapter?: string } = { courseName: '', addChapter: '' };


  

 

  constructor(private authServices:AuthService, private route:Router){}

  storeCourse(){
    console.log("welcome to the coourse",this.courseDetails)
  }

  addchapter(){

    console.log("welcome to the coourse",this.courseDetails.addChapter)
  }

  reset(){

    console.log("welcome to the coourse",this.courseDetails.addChapter)
  }

  
  

updateCourse(index: number) {
  // Assuming this.Courses[index] is an object containing _id and courseName
  if (this.Courses[index] && this.Courses[index]._id && this.Courses[index].courseName) {
    this.authServices.updateCourse(this.Courses[index].courseName, this.Courses[index]._id).subscribe({
      next: response => {
        console.log('Course Updated:', response.result); // Log the response from the backend
        // Uncomment to navigate after updating
        // this.route.navigate(['/admin']);
      },
      error: (err) => {
        console.error('Failed to update course:', err); // Handle errors
      }
    });
  } else {
    console.error('Invalid course details provided');
  }
}

addCourse() {
  console.log('Course Details:', this.courseDetails); // Check the entire object before sending
  if (this.courseDetails.courseName) {
    this.authServices.addCourse(this.courseDetails.courseName).subscribe({
      next: response => {
        console.log('Response:', response); // Check what the API is returning
        console.log('courseName received:', response.courseName);
      },
      error: err => {
        console.error('Error while adding course:', err);
      }
    });
  } else {
    console.error('Course name is undefined or empty');
  }
}


}

