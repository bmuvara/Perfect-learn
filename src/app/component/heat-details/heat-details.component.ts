import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-heat-details',
  templateUrl: './heat-details.component.html',
  styleUrl: './heat-details.component.css'
})
export class HeatDetailsComponent {

  
     heats: any []=[]
  
     constructor (private authService:AuthService){}
  
     ngOnInit(){
  
      this.authService.getheRecord().subscribe(
  
        (data)=>{
          this.heats=data;
          console.log('Heat details',data);
  
        },
        (error)=>{
  
          console.log('fail to retrieve Heat record',error);
        }
  
  
  
      );
     }
  
  

}
