import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-kfmetrics-details',
  templateUrl: './kfmetrics-details.component.html',
  styleUrl: './kfmetrics-details.component.css'
})
export class KfmetricsDetailsComponent {
  kfmetrics: any []=[]
  
     constructor (private authService:AuthService){}
  
     ngOnInit(){
  
      this.authService.getkfmRecord().subscribe(
  
        (data)=>{
          this.kfmetrics=data;
          console.log('Key Fertility Metrics Summary  details',data);
  
        },
        (error)=>{
  
          console.log('fail to retrieve Key Fertility Metrics Summary  record',error);
        }
  
  
  
      );
     }
  

}
