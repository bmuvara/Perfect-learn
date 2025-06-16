import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { response } from 'express';

@Component({
  selector: 'app-costreturn',
  templateUrl: './costreturn.component.html',
  styleUrl: './costreturn.component.css'
})
export class CostreturnComponent {

  Costreturn:any []=[]
  
  costreturn={
    date : '', 
    item : '', 
    unit : '', 
    quantity : '', 
    price : '', 
    totalvalue : '', 
    incomeyn : '', 
    costyn : '', 
    typecost : '', 
    comment : ''
  };

  constructor (private authService:AuthService){}

  reset (form:any){
    form.reset()
    this.costreturn={   
    date : '', 
    item : '', 
    unit : '', 
    quantity : '', 
    price : '', 
    totalvalue : '', 
    incomeyn : '', 
    costyn : '', 
    typecost : '', 
    comment : ''

    }
  }

storeCourse(){
  console.log('Courese stored successfully')
}

addChapter(){
  console.log('Chapter added successfully');
}

addcrRecord(){

  console.log('The cost and Return Record',this.costreturn);

  if (this.costreturn)
  {
    const{date,item,unit,quantity,price,totalvalue,incomeyn,costyn,typecost,comment}=this.costreturn

    this.authService.addcrRecord(date,item,unit,quantity,price,totalvalue,incomeyn,costyn,typecost,comment).subscribe({
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
