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
import { OwnCourseComponent } from './component/own-course/own-course.component';
import { ViewRequestComponent } from './component/view-request/view-request.component';
import { StudentHomeComponent } from './component/student-home/student-home.component';
import {AuthService} from './auth.service'
import{AuthInterceptor} from './interceptor.guard'
import{HTTP_INTERCEPTORS} from '@angular/common/http';
import { MilkdistributionComponent } from './component/milkdistribution/milkdistribution.component';
import { MilkdistributionDetailsComponent } from './component/milkdistribution-details/milkdistribution-details.component';
import { DiseaseComponent } from './component/disease/disease.component';
import { DiseaseDetailsComponent } from './component/disease-details/disease-details.component';
import { VaccinationComponent } from './component/vaccination/vaccination.component';
import { VaccinationDetailsComponent } from './component/vaccination-details/vaccination-details.component';
import { DewormingDetailsComponent } from './component/deworming-details/deworming-details.component';
import { DewormingComponent } from './component/deworming/deworming.component';
import { FeedingComponent } from './component/feeding/feeding.component';
import { FeedcostComponent } from './component/feedcost/feedcost.component';
import { LabourcostComponent } from './component/labourcost/labourcost.component';
import { InventorycostComponent } from './component/inventorycost/inventorycost.component';
import { CostreturnComponent } from './component/costreturn/costreturn.component';
import { CostreturnDetailsComponent } from './component/costreturn-details/costreturn-details.component';
import { InventorycostDetailsComponent } from './component/inventorycost-details/inventorycost-details.component';
import { LabourcostDetailsComponent } from './component/labourcost-details/labourcost-details.component';
import { FeedcostDetailsComponent } from './component/feedcost-details/feedcost-details.component';
import { FeedingDetailsComponent } from './component/feeding-details/feeding-details.component';
import { HeatComponent } from './component/heat/heat.component';
import { HeatDetailsComponent } from './component/heat-details/heat-details.component';
import { PregnancyComponent } from './component/pregnancy/pregnancy.component';
import { PregnancyDetailsComponent } from './component/pregnancy-details/pregnancy-details.component';
import { CalvingDetailsComponent } from './component/calving-details/calving-details.component';
import { CalvingComponent } from './component/calving/calving.component';
import { KfmetricsDetailsComponent } from './component/kfmetrics-details/kfmetrics-details.component';
import { KfmetricsComponent } from './component/kfmetrics/kfmetrics.component';

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
    OwnCourseComponent,
    ViewRequestComponent,
    StudentHomeComponent,
    MilkdistributionComponent,
    MilkdistributionDetailsComponent,
    DiseaseComponent,
    DiseaseDetailsComponent,
    VaccinationComponent,
    VaccinationDetailsComponent,
    DewormingDetailsComponent,
    DewormingComponent,
    FeedingComponent,
    FeedcostComponent,
    LabourcostComponent,
    InventorycostComponent,
    CostreturnComponent,
    CostreturnDetailsComponent,
    InventorycostDetailsComponent,
    LabourcostDetailsComponent,
    FeedcostDetailsComponent,
    FeedingDetailsComponent,
    HeatComponent,
    HeatDetailsComponent,
    PregnancyComponent,
    PregnancyDetailsComponent,
    CalvingDetailsComponent,
    CalvingComponent,
    KfmetricsDetailsComponent,
    KfmetricsComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),//enable fetch API
    AuthService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
