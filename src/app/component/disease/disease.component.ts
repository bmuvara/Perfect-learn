import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Console, error } from 'console';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrl: './disease.component.css'
})
export class DiseaseComponent {

 Disease: any []=[]

disease= {animalname:'',
animalnumber:'',
dob:'',
species:'',
breed:'',
signsobserved:'',
suspecteddisease :'',
treatmentgiven :'',
treatmentdate:'',
doseused:'',
doseadminstered:'',
nextduedate:'',
vetname:'',
comment:'',
};

constructor(private authService:AuthService){}

reset(form:any)
{
form.reset()
this.disease= {animalname:'',
animalnumber:'',
dob:'',
species:'',
breed:'',
signsobserved:'',
suspecteddisease :'',
treatmentgiven :'',
treatmentdate:'',
doseused:'',
doseadminstered:'',
nextduedate:'',
vetname:'',
comment:'',
};

}

storeCourse()
{
  console.log("the disease deatils", this.disease);
  
}

addChapter()
{
  console.log("",this.disease)
}

adddisRecord()
{
console.log('Disease Record',this.disease)

if(this.disease)
{

  const {animalname, animalnumber, dob, species, breed, signsobserved, suspecteddisease , treatmentgiven , treatmentdate, doseused, doseadminstered, nextduedate, vetname, comment}=this.disease

  this.authService.adddisRecord(animalname, animalnumber, dob, species, breed, signsobserved, suspecteddisease , treatmentgiven , treatmentdate, doseused, doseadminstered, nextduedate, vetname, comment).subscribe({
  next: response =>{
    console.log('response',response)
  },
  error: error=>{

    console.log('errror',error)
  }

  });
}else{
  console.log('The disease details are either undefined or empty')
}

}

}

