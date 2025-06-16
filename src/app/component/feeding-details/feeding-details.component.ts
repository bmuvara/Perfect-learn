import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-feeding-details',
  templateUrl: './feeding-details.component.html',
  styleUrl: './feeding-details.component.css'
})
export class FeedingDetailsComponent {
  
       feedins: any []=[]
    
       constructor (private authService:AuthService){}
    
       ngOnInit(){

         console.log('Daily Feeding details',this.feedins);
    
        this.authService.getfeedRecord().subscribe(
    
          (data)=>{
            this.feedins=data;
            console.log('Daily Feeding details',data);
    
          },
          (error)=>{
    
            console.log('fail to retrieve Feed Cost record',error);
          }
    
    
    
        );
       }
    
  

}
