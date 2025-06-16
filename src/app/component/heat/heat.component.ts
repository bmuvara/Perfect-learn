import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-heat',
  templateUrl: './heat.component.html',
  styleUrl: './heat.component.css'
})
export class HeatComponent {
  
    Heat:any []=[]
    
        heat
={
    date:' ',
    animalname:' ',
    animalnumber:' ',
    heatsigns:' ',
    insemenation:' ',
    bullsemen:' ',
    technician:' ',
    comment:' ',
    };
  
    constructor (private authService:AuthService){}
  
    reset (form:any){
      form.reset()
      this.heat={       
  date:' ',
    animalname:' ',
    animalnumber:' ',
    heatsigns:' ',
    insemenation:' ',
    bullsemen:' ',
    technician:' ',
    comment:' ',
      }
    }
  
  storeCourse(){
    console.log('Courese stored successfully')
  }
  
  addChapter(){
    console.log('Chapter added successfully');
  }
  
  addheRecord(){
  
    console.log('The cost and Return Record',this.heat);
  
    if (this.heat)
    {
      const{date,animalname,animalnumber,heatsigns,insemenation,bullsemen,technician,comment}=this.heat
  
      this.authService.addheRecord(date,animalname,animalnumber,heatsigns,insemenation,bullsemen,technician,comment).subscribe({
      next: response=>{
        console.log('Response',response)
      },
      error:error=>{
        console.log('ERROR',error)
      }
  
      });
  
    }else{
      console.log('The Heat record are either undefined or unavailable')
    }
  
  }

}
