import { Component } from '@angular/core';
import {AuthService} from '../../auth.service'

@Component({
  selector: 'app-deworming',
  templateUrl: './deworming.component.html',
  styleUrl: './deworming.component.css'
})
export class DewormingComponent {

  Deworming:any []=[]

   deworning={
    animalname: '',
    animalnumber: '',
    dob: '',
    species: '',
    breed: '',
    date: '',
    dewormerused: '',
    doseadminstered: '',
    nextduedate: '',
    vetname: '',
    comment: ''
  };


 constructor(private authServices: AuthService){}

 reset (form:any){

   form.reset()
   this. deworning={
    animalname: '',
    animalnumber: '',
    dob: '',
    species: '',
    breed: '',
    date: '',
    dewormerused: '',
    doseadminstered: '',
    nextduedate: '',
    vetname: '',
    comment: ''
  };
   
 }

 storeCourse(){
  console.log("welcome to the coourse",this.deworning)
}

addchapter(){

  console.log("welcome to the coourse",this.deworning)
}



adddRecord(){

  console.log ('Deworming record:',this.deworning)
  if (this.deworning)
  {

    const{animalname, animalnumber, dob, species, breed, date, dewormerused, doseadminstered, nextduedate, vetname, comment}=this.deworning
   
 this.authServices.adddRecord(animalname, animalnumber, dob, species, breed, date, dewormerused, doseadminstered, nextduedate, vetname, comment) .subscribe({

  next: response=>{

    console.log('Response',response)
  },
   
 error: error=>{
  console.log('Error:',error)
 }

 });

  }else{

    console.log('The deworning details are either empty or undefined')
  }

  

}

}
