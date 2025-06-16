import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-labourcost-details',
  templateUrl: './labourcost-details.component.html',
  styleUrl: './labourcost-details.component.css'
})
export class LabourcostDetailsComponent {

  labourcosts: any []=[];
  
     constructor (private authService:AuthService){}
  
     ngOnInit()
     
     {
  
      this.authService.getlbcRecord().subscribe(
  
        (data)=>{
          this.labourcosts=data;
          console.log('Labour Cost details',data);
  
        },
        (error)=>{
  
          console.log('fail to retrieve Labour Cost  record',error);
        }
  
  
  
      );
     }
  

}
