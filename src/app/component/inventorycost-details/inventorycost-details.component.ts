import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-inventorycost-details',
  templateUrl: './inventorycost-details.component.html',
  styleUrl: './inventorycost-details.component.css'
})
export class InventorycostDetailsComponent {

  iventories: any []=[]

  constructor (private authService:AuthService){}


  ngOnInit()

  {

  

   this.authService.getincRecord().subscribe(

    (data)=>{
        this.iventories=data;
    }
   ),
   (error: any)=>{
    console.log('Error',error)
   }



  }


}
