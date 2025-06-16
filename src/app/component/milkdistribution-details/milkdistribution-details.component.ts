import { Component } from '@angular/core';
import {AuthService}from '../../auth.service'
@Component({
  selector: 'app-milkdistribution-details',
  templateUrl: './milkdistribution-details.component.html',
  styleUrl: './milkdistribution-details.component.css'
})
export class MilkdistributionDetailsComponent {

  
  
  milkdistributions: any []=[];

  constructor(private authServices:AuthService){}

  ngOnInit() {
    this.authServices.getDistrecord().subscribe(
      (data)=>{
        this.milkdistributions=data;
        console.log('milk reord',data)
      },
      (error)=>{
        console.error ('Error Fetching city data',error)
      }
  
    );
  
    
  
  }

  requestCourse(){
    console.log("the courseDetails",this.milkdistributions)
  }
}


