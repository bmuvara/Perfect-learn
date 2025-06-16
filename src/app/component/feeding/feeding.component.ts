import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrl: './feeding.component.css'
})
export class FeedingComponent {

    Feedings:any []=[]
      
      feeding={
      date: ' ',
      animalgroup: ' ',
      feedingredient: ' ',
      quantity: ' ',
      drymatter: ' ',
      totaldm: ' ',
      comment: ' '
      };
    
      constructor (private authService:AuthService){}
    
      reset (form:any){
        form.reset()
        this.feeding={   
      date: ' ',
      animalgroup: ' ',
      feedingredient: ' ',
      quantity: ' ',
      drymatter: ' ',
      totaldm: ' ',
      comment: ' '
    
        }
      }
    
    storeCourse(){
      console.log('Courese stored successfully')
    }
    
    addChapter(){
      console.log('Chapter added successfully');
    }
    
    addfeedRecord(){
    
      console.log('The cost and Return Record',this.feeding);
    
      if (this.feeding)
      {
        const{date,animalgroup,feedingredient,quantity,drymatter,totaldm,comment}=this.feeding
    
        this.authService.addfeedRecord(date,animalgroup,feedingredient,quantity,drymatter,totaldm,comment).subscribe({
        next: response=>{
          console.log('Response',response)
        },
        error:error=>{
          console.log('ERROR',error)
        }
    
        });
    
      }else{
        console.log('The cost and return record are either undefined or unavailable')
      }
    
    }
    
  

}
