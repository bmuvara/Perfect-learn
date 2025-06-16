import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-calving',
  templateUrl: './calving.component.html',
  styleUrl: './calving.component.css'
})
export class CalvingComponent {
    Calving:any []=[]
    
    calving={
    date: ' ',
    animalname: ' ',
    animalnumber: ' ',
    calfname: ' ',
    calfnumber: ' ',
    calfsex: ' ',
    birthweigt: ' ',
    calvingease: ' ',
    placenta:  ' ',
    metritis: ' ',
    comment:  ' '
    };
  
    constructor (private authService:AuthService){}
  
    reset (form:any){
      form.reset()
      this.calving={   
      date: ' ',
    animalname: ' ',
    animalnumber: ' ',
    calfname: ' ',
    calfnumber: ' ',
    calfsex: ' ',
    birthweigt: ' ',
    calvingease: ' ',
    placenta:  ' ',
    metritis: ' ',
    comment:  ' '
  
      }
    }
  
  storeCourse(){
    console.log('Courese stored successfully')
  }
  
  addChapter(){
    console.log('Chapter added successfully');
  }
  
  addcalRecord(){
  
    console.log('The Calving Record',this.calving);
  
    if (this.calving)
    {
      const{date,animalname,animalnumber,calfname,calfnumber,calfsex,birthweigt,calvingease,placenta,metritis,comment}=this.calving
  
      this.authService.addcalRecord(date,animalname,animalnumber,calfname,calfnumber,calfsex,birthweigt,calvingease,placenta,metritis,comment).subscribe({
      next: response=>{
        console.log('Response',response)
      },
      error:error=>{
        console.log('ERROR',error)
      }
  
      });
  
    }else{
      console.log('The Calving record are either undefined or unavailable')
    }
  
  }
  
  

}
