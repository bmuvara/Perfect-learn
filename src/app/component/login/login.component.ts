import { Component,OnInit } from '@angular/core';
import {FormGroup,FormsModule} from '@angular/forms'
import {Router} from '@angular/router'
import{AuthService} from '../.././auth.service'
import { response } from 'express';
import{jwtDecode} from 'jwt-decode'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup; 


  errorMessage = '';
  userCriteria: any ={
    email:'',
    password:'',
    username:'',
    
 }; 

 constructor( private authServices: AuthService,private route:Router){}

 decodeToken(token: string): any {
  try {
    return jwtDecode(token);
  } catch (Error) {
    console.error('Error decoding token:', Error);
    return null;
  }
}

login(){

  debugger

  this.authServices.login(this.userCriteria.username,this.userCriteria.password).subscribe({
  next:response =>{
    console.log('Token received:', response.token);
    this.authServices.saveToken(response.token);
    console.log('Token stored in localStorage:', this.authServices.getToken());  // Log the stored token
    console.log('Navigating to /admin/addcourse');
    /* this.route.navigate(['/admin']); */


        // Decode the token to get the user's role
        const decodedToken: any = this.decodeToken(response.token);
        const userRole = decodedToken.role;  // Assuming the role is stored in the token
        console.log('User Role:',userRole);

        

        // Navigate based on role
        if (userRole === 'admin') {
          console.log('Navigating to Admin Page');
          this.route.navigate(['/admin']);
        } else if (userRole === 'student') {
          console.log('Navigating to student Page');
          this.route.navigate(['/studentHome/viewCourseByStudent']);
        } else if (userRole === 'faculty') {
          console.log('Navigating to student Page');
          this.route.navigate(['/Faculty']);
        }
        else {
          console.log('Unknown role, staying on login page');
          this.errorMessage = 'Unknown user role';
          this.route.navigate(['/login']);
        }
      },
      error: err => {
        console.error('Login failed', err);
        this.errorMessage = 'Invalid email or Password';
      }
    });


  }



  }