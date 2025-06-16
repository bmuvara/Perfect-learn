import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { error } from 'console';

@Component({
  selector: 'app-costreturn-details',
  templateUrl: './costreturn-details.component.html',
  styleUrl: './costreturn-details.component.css'
})
export class CostreturnDetailsComponent {
  
   costreturns: any []=[]

   constructor (private authService:AuthService){}

   ngOnInit(){

    this.authService.getcrRecord().subscribe(

      (data)=>{
        this.costreturns=data;
        console.log('Cost and return details',data);

      },
      (error)=>{

        console.log('fail to retrieve Cost and return record',error);
      }



    );
   }

}
