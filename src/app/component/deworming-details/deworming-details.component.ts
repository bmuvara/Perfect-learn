import { Component } from '@angular/core';
import  {AuthService} from '../../auth.service'
import { error } from 'console';

@Component({
  selector: 'app-deworming-details',
  templateUrl: './deworming-details.component.html',
  styleUrl: './deworming-details.component.css'
})
export class DewormingDetailsComponent {

  dewormings: any []=[];



constructor( private authServices:AuthService){}



ngOnInit()
  {
 this.authServices.getdRecord().subscribe(
   (data)=>{

    this.dewormings=data;
    console.log("Deworning",data)
   },
   (error)=>{
    console.log("Fail to retrieve deworning record",error)
   }

 );


  }



}
