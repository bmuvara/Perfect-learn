import { Component } from '@angular/core';
import {AuthService} from '../../auth.service'
import {FormGroup} from '@angular/forms'
import{Router} from '@angular/router'


@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrl: './vaccination.component.css'
})
export class VaccinationComponent {

addForm!:FormGroup;

Vaccination :any[]=[]

vaccinerecord ={
    
  'animalname': '',
  'animalnumber':'',
  'dob':'',
  'species':'',
  'breed':'',
  'vaccdate':'',
  'vaccused':'',
  'doseadminstered':'',
  'nextduedate':'',
  'vetname':'',
  'comment':''
  
  }
  
constructor(private authServices:AuthService, private route:Router ){}

reset(form:any)


{
  form.reset() 
  this.vaccinerecord ={
    
    'animalname': '',
    'animalnumber':'',
    'dob':'',
    'species':'',
    'breed':'',
    'vaccdate':'',
    'vaccused':'',
    'doseadminstered':'',
    'nextduedate':'',
    'vetname':'',
    'comment':''
    
    };
    


}


storeCourse(){
  console.log("welcome to the coourse",this.vaccinerecord)
}

addchapter(){

  console.log("welcome to the coourse",this.vaccinerecord)
}


addvRecord() {
  console.log('Milk Production Details:', this.vaccinerecord); // Check the entire object before sending
  if (this.vaccinerecord) {
    // Destructure the milkdistribution object to get the individual properties
    const { animalname, animalnumber, dob, species, breed, vaccdate, vaccused, doseadminstered, nextduedate, vetname, comment} = this.vaccinerecord;
    
    

    this.authServices.addvRecord(animalname, animalnumber, dob, species, breed, vaccdate, vaccused, doseadminstered, nextduedate, vetname, comment).subscribe({
      next: (response: any) => {
        console.log('Response:', response); // Check what the API is returning
      },
      error: (err: any) => {
        console.error('Error while adding record:', err);
      }
    });
  } else {
    console.error('Milk production details are undefined or empty');
  }

}


}