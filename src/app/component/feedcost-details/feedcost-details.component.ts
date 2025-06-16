import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-feedcost-details',
  templateUrl: './feedcost-details.component.html',
  styleUrl: './feedcost-details.component.css'
})
export class FeedcostDetailsComponent {

  
     feedcosts: any []=[]
  
     constructor (private authService:AuthService){}
  
     ngOnInit(){
  
      this.authService.getfdcRecord().subscribe(
  
        (data)=>{
          this.feedcosts=data;
          console.log('Feed Cost details',data);
  
        },
        (error)=>{
  
          console.log('fail to retrieve Feed Cost record',error);
        }
  
  
  
      );
     }
  

}
