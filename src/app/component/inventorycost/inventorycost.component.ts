import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-inventorycost',
  templateUrl: './inventorycost.component.html',
  styleUrl: './inventorycost.component.css'
})
export class InventorycostComponent {

  Inventory: any []=[]

  iventory={    
    itemd: '',
    category: '',
    quantity: '',
    unitmeasure: '',
    unitcost: '',
    totalcost: '',
    salvagecost: '',
    age: '',
    depreciation: '',    
    purchasedate: '',   
    supplier: '',
    storagelocation: '',
    remarks: '',
    source: '' 

  };

 constructor(private authService:AuthService){}

  reset(form:any){

    form.reset()
    this.iventory={
    itemd: '',
    category: '',
    quantity: '',
    unitmeasure: '',
    unitcost: '',
    totalcost: '',
    salvagecost: '',
    age: '',
    depreciation: '',    
    purchasedate: '',   
    supplier: '',
    storagelocation: '',
    remarks: '',
    source: '' 
    }
  };


  storeCourse(){
    
  }

  addcrRecord(){
    console.log('Ivestment record',this.iventory);

    if (this.iventory)
    {

      const {itemd,category,quantity,unitmeasure,unitcost,totalcost,salvagecost,age,depreciation,purchasedate,supplier,storagelocation,remarks,source}=this.iventory

      this.authService.addincRecord(itemd,category,quantity,unitmeasure,unitcost,totalcost,salvagecost,age,depreciation,purchasedate,supplier,storagelocation,remarks,source).subscribe({

        next:response=>{
          console.log('response',response)

        },
        error: error=>{
          console.log('Error',error)

        }

      })
     

    
    }
   else{
    console.log('the Inventory cost record are either empty or undefined')
   }

    
  }


}
