import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-pregnancy-details',
  templateUrl: './pregnancy-details.component.html',
  styleUrl: './pregnancy-details.component.css'
})
export class PregnancyDetailsComponent {
     pregnacys: any []=[]
  
     constructor (private authService:AuthService){}
  
     ngOnInit(){
  
      this.authService.getcrRecord().subscribe(
  
        (data)=>{
          this.pregnacys=data;
          console.log('Pregnacys details',data);
  
        },
        (error)=>{
  
          console.log('fail to Pregnacys record',error);
        }
  
  
  
      );
     }
  

}
