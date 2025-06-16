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
import { MilkdistributionComponent } from './component/milkdistribution/milkdistribution.component';
import { MilkdistributionDetailsComponent } from './component/milkdistribution-details/milkdistribution-details.component';

//added for User roles Authentication Under Student;
import { ViewRequestComponent } from './component/view-request/view-request.component';
import { OwnCourseComponent } from './component/own-course/own-course.component';
import { VaccinationComponent } from './component/vaccination/vaccination.component';
import { VaccinationDetailsComponent } from './component/vaccination-details/vaccination-details.component';
import { DewormingDetailsComponent } from './component/deworming-details/deworming-details.component';
import { DewormingComponent } from './component/deworming/deworming.component';
import { DiseaseComponent } from './component/disease/disease.component';
import { DiseaseDetailsComponent } from './component/disease-details/disease-details.component';
import { CostreturnComponent } from './component/costreturn/costreturn.component';
import { CostreturnDetailsComponent } from './component/costreturn-details/costreturn-details.component';
import { InventorycostComponent } from './component/inventorycost/inventorycost.component';
import { InventorycostDetailsComponent } from './component/inventorycost-details/inventorycost-details.component';
import { LabourcostComponent } from './component/labourcost/labourcost.component';
import { LabourcostDetailsComponent } from './component/labourcost-details/labourcost-details.component';
import { FeedcostComponent } from './component/feedcost/feedcost.component';
import { FeedcostDetailsComponent } from './component/feedcost-details/feedcost-details.component';
import { FeedingComponent } from './component/feeding/feeding.component';
import { FeedingDetailsComponent } from './component/feeding-details/feeding-details.component';
import { PregnancyComponent } from './component/pregnancy/pregnancy.component';
import { PregnancyDetailsComponent } from './component/pregnancy-details/pregnancy-details.component';
import { HeatComponent } from './component/heat/heat.component';
import { HeatDetailsComponent } from './component/heat-details/heat-details.component';
import { CalvingComponent } from './component/calving/calving.component';
import { CalvingDetailsComponent } from './component/calving-details/calving-details.component';
import { KfmetricsComponent } from './component/kfmetrics/kfmetrics.component';
import { KfmetricsDetailsComponent } from './component/kfmetrics-details/kfmetrics-details.component';

const routes: Routes = [
  {path:'home', component:HomeComponent },
  {path:'login', component:LoginComponent },
 

    // Admin Routes
    {

  path:'admin', 
  component:FacultyDetailsComponent,//Admin
  canActivate: [AuthGuard],
  data: { roles: ['admin'] },
  children:[
  
  {path:'studentHome/viewCourseByStudent', component:StudentHomeComponent},//student
  {path: 'Faculty',component:FacultyDetailsComponent},
  {
  path: 'Milkdistribution',
  component: MilkdistributionComponent,
  children: [
    { path: 'distribution-details', component: MilkdistributionDetailsComponent ,canActivate: [AuthGuard],
        data: { roles: ['admin'] }},
  ],
},
  
{
  path: 'Vacc',
  component: VaccinationComponent,
  children: [
    { path: 'vaccination-details', component: VaccinationDetailsComponent },
  ],
},
{path:'Recordmilk', component: AddCourseComponent,canActivate: [AuthGuard],
        data: { roles: ['admin']}} ,
  {path:'Vaccd',component:VaccinationDetailsComponent},
  {path:'dewod',component:DewormingDetailsComponent},
  {path:'dewo',component:DewormingComponent},
  {path:'Distribution',component:MilkdistributionDetailsComponent},
   {path: 'vaccination-details', component: VaccinationDetailsComponent },
   {path:'diss',component: DiseaseComponent},
   {path :'dissd',component:DiseaseDetailsComponent},
   {path:'costreturn',component:CostreturnComponent},
   {path:'costreturndt',component:CostreturnDetailsComponent},
   {path:'invento',component:InventorycostComponent},
   {path:'inventod',component:InventorycostDetailsComponent},
   {path:'labourc',component:LabourcostComponent},
   {path:'labourcd',component:LabourcostDetailsComponent},
   {path:'feedc',component:FeedcostComponent},
   {path:'feedcd',component:FeedcostDetailsComponent},
   {path:'feeding',component:FeedingComponent},
   {path:'feedingd',component:FeedingDetailsComponent},
   {path:'pregna',component:PregnancyComponent},
   {path:'pregnad',component:PregnancyDetailsComponent},
   {path:'heat',component:HeatComponent},
   {path:'heatd',component:HeatDetailsComponent},
   {path:'calv',component:CalvingComponent},
   {path:'calvd',component:CalvingDetailsComponent},
   {path:'fkm',component:KfmetricsComponent},
   {path:'fkmd',component:KfmetricsDetailsComponent}
   
  ],
},
 // Milk Distribution Routes
 {

  path:'Vetinary', 
  component:FacultyDetailsComponent,//Admin
  canActivate: [AuthGuard],
  data: { roles: ['Vetinary'] },
  children:[
  {path:'studentHome/viewCourseByStudent', component:StudentHomeComponent},//student
  {path: 'Faculty',component:FacultyDetailsComponent},
  {
  path: 'Milkdistribution',
  component: MilkdistributionComponent,
  children: [
    { path: 'distribution-details', component: MilkdistributionDetailsComponent },
  ],
},
  
  {path:'Vaccd',component:VaccinationDetailsComponent},
  {path:'dewod',component:DewormingDetailsComponent},
  {path:'dewo',component:DewormingComponent},
  {path:'Distribution',component:MilkdistributionDetailsComponent},
   {path: 'vaccination-details', component: VaccinationDetailsComponent }
  ],
},


// Wildcard Route
{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
