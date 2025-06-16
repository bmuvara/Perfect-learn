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


  milkProduction={
    date: '',
    cownumber:'',
    cowname:'',
    milking_period: '',
    comment:'',
    total:''
 }; 

 

  constructor(private authServices:AuthService, private route:Router){}


//Method for  reset the form

reset(form:any)
{
   form.reset();// Resets the form controls
   this.milkProduction={
    date: '',
    cownumber:'',
    cowname:'',
    milking_period: '',
    comment:'',
    total:'0'
   };

}

  storeCourse(){
    console.log("welcome to the coourse",this.milkProduction)
  }

  addchapter(){

    console.log("welcome to the coourse",this.milkProduction)
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



addRecord() {
  console.log('Milk Production Details:', this.milkProduction); // Check the entire object before sending
  if (this.milkProduction) {
    // Destructure the milkProduction object to get the individual properties
    const { cownumber,cowname,date,milking_period,total,comment } = this.milkProduction;
    const totalmilk = Number(total);

    this.authServices.addRecord(cownumber,cowname,date,milking_period,totalmilk,comment).subscribe({
      next: response => {
        console.log('Response:', response); // Check what the API is returning
      },
      error: err => {
        console.error('Error while adding record:', err);
      }
    });
  } else {
    console.error('Milk production details are undefined or empty');
  }
}

}
