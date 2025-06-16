import { Component } from '@angular/core';
import {AuthService} from '../../auth.service'


@Component({
  selector: 'app-vaccination-details',
  templateUrl: './vaccination-details.component.html',
  styleUrl: './vaccination-details.component.css'
})
export class VaccinationDetailsComponent {

  vaccinations:any []=[];


  constructor(private authServices:AuthService){}

  ngOnInit(){

    this.authServices.getvRecord().subscribe(

      (data)=>{

        this.vaccinations=data;
        console.log('vaccinations',data);
      },

    (error)=>{

      console.log('error message',error);
    }

    );

  }

}
