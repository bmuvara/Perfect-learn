import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../../auth.service';
/* import { console } from 'node:inspector'; */

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent  implements OnInit {




  
  milkrecords: any []=[];

  constructor(private authServices:AuthService){}

  ngOnInit() {
    this.authServices.getRecord().subscribe(
      (data)=>{
        this.milkrecords=data;
        console.log('milk reord',data)
      },
      (error)=>{
        console.error ('Error Fetching city data',error)
      }
  
    );
  
    
  
  }

  requestCourse(){
    console.log("the courseDetails",this.milkrecords)
  }
}
