import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {provideHttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { StudentDetailsComponent } from './component/student-details/student-details.component';
import { FacultyDetailsComponent } from './component/faculty-details/faculty-details.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { LogoutComponent } from './component/logout/logout.component';
import { RequestCourseComponent } from './component/request-course/request-course.component';
import { OwnCourseComponent } from './component/own-course/own-course.component';
import { ViewRequestComponent } from './component/view-request/view-request.component';
import { StudentHomeComponent } from './component/student-home/student-home.component';
import {AuthService} from './auth.service'
import{AuthInterceptor} from './interceptor.guard'
import{HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddCourseComponent,
    CourseDetailsComponent,
    StudentDetailsComponent,
    FacultyDetailsComponent,
    ChangePasswordComponent,
    LogoutComponent,
    RequestCourseComponent,
    OwnCourseComponent,
    ViewRequestComponent,
    StudentHomeComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    AuthService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
