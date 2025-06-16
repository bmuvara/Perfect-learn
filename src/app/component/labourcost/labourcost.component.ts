import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-labourcost',
  templateUrl: './labourcost.component.html',
  styleUrl: './labourcost.component.css'
})
export class LabourcostComponent {

  Labourcost:any []=[]
    
    labourcost={
          date: ' ',
    labourid: ' ',
    labourtype: ' ',
    taskperformed: ' ',
    hoursworked: ' ',
    wagerate: ' ',
    dailylcost: ' ',
    comment: ' '
    };
  
    constructor (private authService:AuthService){}
  
    reset (form:any){
      form.reset()
      this.labourcost={   
    date: ' ',
    labourid: ' ',
    labourtype: ' ',
    taskperformed: ' ',
    hoursworked: ' ',
    wagerate: ' ',
    dailylcost: ' ',
    comment: ' '
  
      }
    }
  
  storeCourse(){
    console.log('Courese stored successfully')
  }
  
  addChapter(){
    console.log('Chapter added successfully');
  }
  
  addlbcRecord(){
  
    console.log('The Labour cost  Record',this.labourcost);
  
    if (this.labourcost)
    {
      const{date,labourid,labourtype,taskperformed,hoursworked,wagerate,dailylcost,comment}=this.labourcost
  
      this.authService.addlbcRecord(date,labourid,labourtype,taskperformed,hoursworked,wagerate,dailylcost,comment).subscribe({
      next: response=>{
        console.log('Response',response)
      },
      error:error=>{
        console.log('ERROR',error)
      }
  
      });
  
    }else{
      console.log('The Labour Cost record are either undefined or unavailable')
    }
  
  }
  
  

}
