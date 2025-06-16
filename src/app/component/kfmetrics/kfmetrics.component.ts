import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-kfmetrics',
  templateUrl: './kfmetrics.component.html',
  styleUrl: './kfmetrics.component.css'
})
export class KfmetricsComponent {

    Kfmetrics:any []=[]
    
    kfmetric={
    date: ' ',
    animalname: ' ',
    animalnumber: ' ',
    dfservice: ' ',
    dopen: ' ',
    calvingInterval: ' ',
    conceptionrate: ' ',
    serviceperpreg: ' ',
    comment: ' '
    };
  
    constructor (private authService:AuthService){}
  
    reset (form:any){
      form.reset()
      this.kfmetric={   
    date: ' ',
    animalname: ' ',
    animalnumber: ' ',
    dfservice: ' ',
    dopen: ' ',
    calvingInterval: ' ',
    conceptionrate: ' ',
    serviceperpreg: ' ',
    comment: ' '
  
      }
    }
  
  storeCourse(){
    console.log('Courese stored successfully')
  }
  
  addChapter(){
    console.log('Chapter added successfully');
  }
  
  addfmRecord(){
  
    console.log('The cost and Return Record',this.kfmetric);
  
    if (this.kfmetric)
    {
      const{date,animalname,animalnumber,dfservice,dopen,calvingInterval,conceptionrate,serviceperpreg,comment}=this.kfmetric
  
      this.authService.addkfmRecord(date,animalname,animalnumber,dfservice,dopen,calvingInterval,conceptionrate,serviceperpreg,comment).subscribe({
      next: response=>{
        console.log('Response',response)
      },
      error:error=>{
        console.log('ERROR',error)
      }
  
      });
  
    }else{
      console.log('The cost and return record are either undefined or unavailable')
    }
  
  }
  

}
