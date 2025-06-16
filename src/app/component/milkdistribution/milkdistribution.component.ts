import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {AuthService} from '../../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-milkdistribution',
  templateUrl: './milkdistribution.component.html',
  styleUrl: './milkdistribution.component.css'
})
export class MilkdistributionComponent {

  addForm!:FormGroup

  Courses: any []=[]; 

  successMessage = '';


  milkdistribution={
    date: '',
    custumernumber:'',
    custumername:'',
    custumerlocation:'',
    comment:'',
    totalmilk:'',
    totalcost:'',
 }; 

 

  constructor(private authServices:AuthService, private route:Router){}


//Method for  reset the form

reset(form:any)
{
   form.reset();// Resets the form controls
   this.milkdistribution={
    date: '',
    custumernumber:'',
    custumername:'',
    custumerlocation:'',
    comment:'',
    totalmilk:'',
    totalcost:'',
   };

}

  storeCourse(){
    console.log("welcome to the coourse",this.milkdistribution)
  }

  addchapter(){

    console.log("welcome to the coourse",this.milkdistribution)
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



addDistrecord() {
  console.log('Milk Production Details:', this.milkdistribution); // Check the entire object before sending
  if (this.milkdistribution) {
    // Destructure the milkdistribution object to get the individual properties
    const { custumernumber,custumername,date,custumerlocation,totalmilk,comment,totalcost} = this.milkdistribution;
    const totalmilks = Number(totalmilk); 
    const totalcosts = Number(totalcost);
    

    this.authServices.addDistrecord(custumernumber,custumername,date,custumerlocation,totalmilks,comment,totalcosts).subscribe({
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
