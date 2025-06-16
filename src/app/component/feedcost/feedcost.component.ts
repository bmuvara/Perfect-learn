import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-feedcost',
  templateUrl: './feedcost.component.html',
  styleUrl: './feedcost.component.css'
})
export class FeedcostComponent {

   Feedcosts:any []=[]
    
    feedcost={
    date: ' ',
    feedtype: ' ',
    quantity: ' ',
    unitprice: ' ',
    totalcost: ' ',
    comment: ' '
    };
  
    constructor (private authService:AuthService){}
  
    reset (form:any){
      form.reset()
      this.feedcost={   
        date: ' ',
    feedtype: ' ',
    quantity: ' ',
    unitprice: ' ',
    totalcost: ' ',
    comment: ' '
      }
    }
  
  storeCourse(){
    console.log('Courese stored successfully')
  }
  
  addChapter(){
    console.log('Chapter added successfully');
  }
  
  addfdcRecord(){
  
    console.log('The cost and Return Record',this.feedcost);
  
    if (this.feedcost)
    {
      const{date,feedtype,quantity,unitprice,totalcost,comment}=this.feedcost
  
      this.authService.addfdcRecord(date,feedtype,quantity,unitprice,totalcost,comment).subscribe({
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
