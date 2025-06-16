import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-pregnancy',
  templateUrl: './pregnancy.component.html',
  styleUrl: './pregnancy.component.css'
})
export class PregnancyComponent {

    Pregnacy:any []=[]
    
    pregnacy={
          date: ' ',
    animalname: ' ',
    animalnumber: ' ',
    method: ' ',
    result: ' ',
    expecteddate: ' ',
    comment: ' ',
    };
  
    constructor (private authService:AuthService){}
  
    reset (form:any){
      form.reset()
      this.pregnacy={   
          date: ' ',
    animalname: ' ',
    animalnumber: ' ',
    method: ' ',
    result: ' ',
    expecteddate: ' ',
    comment: ' ',
      }
    }
  
  storeCourse(){
    console.log('Courese stored successfully')
  }
  
  addChapter(){
    console.log('Chapter added successfully');
  }
  
  addpreRecord(){
  
    console.log('Pregnancy Record',this.pregnacy);
  
    if (this.pregnacy)
    {
      const{date,animalname,animalnumber,method,result,expecteddate,comment}=this.pregnacy
  
      this.authService.addpreRecord(date,animalname,animalnumber,method,result,expecteddate,comment).subscribe({
      next: response=>{
        console.log('Response',response)
      },
      error:error=>{
        console.log('ERROR',error)
      }
  
      });
  
    }else{
      console.log('The pregnancy record are either undefined or unavailable')
    }
  
  }
  
  

}
