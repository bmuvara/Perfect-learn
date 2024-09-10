import { Component ,OnInit} from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent  implements OnInit {



 /*  courseDetails: any[]=[{SrNO:'1',courseName:'Java'},
  {SrNO:'2',courseName:'Angular'},
  {SrNO:'3',courseName:'React'},
  ] */
  
  Courses: any []=[];

  constructor(private authServices:AuthService){}

  ngOnInit() {
    this.authServices.getCourses().subscribe(
      (data)=>{
        this.Courses=data;
      },
      (error)=>{
        console.error ('Error Fetching city data',error)
      }
  
    );
  
    
  
  }

  requestCourse(){
    console.log("the courseDetails",this.Courses)
  }
}
