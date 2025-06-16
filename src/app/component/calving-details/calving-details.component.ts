import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-calving-details',
  templateUrl: './calving-details.component.html',
  styleUrl: './calving-details.component.css'
})
export class CalvingDetailsComponent {

    calvings: any []=[]
  
     constructor (private authService:AuthService){}
  
     ngOnInit(){
  
      this.authService.getcalRecord().subscribe(
  
        (data)=>{
          this.calvings=data;
          console.log('Calving details',data);
  
        },
        (error)=>{
  
          console.log('fail to Calving record',error);
        }
  
  
  
      );
     }
  

}
