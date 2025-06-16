import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { error } from 'console';

@Component({
  selector: 'app-disease-details',
  templateUrl: './disease-details.component.html',
  styleUrl: './disease-details.component.css'
})
export class DiseaseDetailsComponent {

  diseases: any []=[];

  constructor (private authService:AuthService){}

  ngOnInit()
  {

    this.authService.getdisRecord().subscribe( (data)=> {
        this.diseases=data;
        console.log('Diseases',data)},
        (error)=>{
          console.log('error',error)

        }

    );
  }

}
