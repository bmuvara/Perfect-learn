import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { StudentHomeComponent } from './component/student-home/student-home.component';
import{ChangePasswordComponent} from './component/change-password/change-password.component';

import {AuthGuard} from './auth.guard'
import { AuthService } from './auth.service';
//added for User roles Authentication Under Admin
import {AddCourseComponent } from './component/add-course/add-course.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { FacultyDetailsComponent } from './component/faculty-details/faculty-details.component';

//added for User roles Authentication Under Student
import { RequestCourseComponent } from './component/request-course/request-course.component';
import { ViewRequestComponent } from './component/view-request/view-request.component';
import { OwnCourseComponent } from './component/own-course/own-course.component';

const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'login', component:LoginComponent },
  {path:'admin', component:AddCourseComponent },//Admin
  {path:'studentHome/viewCourseByStudent', component:StudentHomeComponent},//student
  {path: 'Faculty',component:FacultyDetailsComponent},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
