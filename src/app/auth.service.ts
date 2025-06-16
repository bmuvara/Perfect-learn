import {  HttpClient,HttpHeaders } from '@angular/common/http';
import {  isPlatformBrowser } from '@angular/common';
import { Injectable,PLATFORM_ID ,Inject} from '@angular/core';
import { Observable } from 'rxjs';
import { platform } from 'os';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';  // Your backend API

  constructor(@Inject(PLATFORM_ID) private platformId:object,private http: HttpClient, ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, { username, password });
  }

  getProtectedData(): Observable<any> {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', token ? `Bearer ${token}` : '');
    return this.http.get<any>(`${this.apiUrl}/protected-route`, { headers });
  }

  /* getToken():string|null {
    return localStorage.getItem('token');
  }

  saveToken(token: string):void {
    localStorage.setItem('token', token);
  }

  removeToken():void {
    localStorage.removeItem('token');
  }
 */


  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  saveToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }
  //Add Record

  addRecord(cownumber:string,cowname:string,date:string,milkingperiod:string,total:number,comment:string): Observable<any> {
    const body ={cownumber,cowname,date,milkingperiod,total,comment}
    return this.http.post<any>(`${this.apiUrl}/record/addRecord`, body);
  }

  // View Record

  getRecord(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/record/getRecord`);
  }

  

  decodeToken(token: string): any {
    /* return jwtDecode(token);  // Decode the JWT token to get the payload */
    const decodedToken = jwtDecode(token);
  console.log('Decoded Tokens:', decodedToken);  // Ensure role is being printed
  return decodedToken;

  }


  updateCourse(courseName:string,_id:number): Observable<any>{

    const body = { _id, courseName };
    return this.http.put<any>(`${this.apiUrl}/auth/updateCourse`,body)
  }


  //Add  distribution Record

  addDistrecord(custumernumber:string,custumername:string,date:string,custumerlocation:string,totalmilk:number,comment:string,totalcost:number): Observable<any> {
    const body ={custumernumber,custumername,date,custumerlocation,totalmilk,comment,totalcost}
    return this.http.post<any>(`${this.apiUrl}/drecord/addDistrecord`, body);
  }


  
  // View distribution Record


  getDistrecord(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/drecord/getRecord`);
  }

   //Add deworning Record

   adddRecord(animalname:string, animalnumber:string, dob:string, species:string, breed:string, date:string, dewormerused:string, doseadminstered:string, nextduedate:string, vetname:string, comment:string):
  Observable<any> {
     const body ={animalname, animalnumber, dob, species, breed, date, dewormerused, doseadminstered, nextduedate, vetname, comment}
     return this.http.post<any>(`${this.apiUrl}/dwrecord/adddRecord`, body);
   }
 
 
 
   // View deworning Record
 
   getdRecord(): Observable<any> {
     return this.http.get<any>(`${this.apiUrl}/dwrecord/getdRecord`);
   }

   //Add Vaccination Record

   

  addvRecord(animalname:string, animalnumber:string, dob:string, species:string, breed:string, vaccdate:string, vaccused:string, doseadminstered:string, nextduedate:string, vetname:string,  comment:string)
  : Observable<any> {
      const body ={animalname, animalnumber, dob, species, breed, vaccdate, vaccused, doseadminstered, nextduedate, vetname, comment}
      return this.http.post<any>(`${this.apiUrl}/vrecord/addvRecord`, body);
    }
  
  
  
    // View Vaccination Record
  
    getvRecord(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/vrecord/getvRecord`);
    }
  
    //Add Disease Record

    adddisRecord(animalname:string, animalnumber:string, dob:string, species:string, breed:string, signsobserved:string, suspecteddisease :string, treatmentgiven :string, treatmentdate:string, doseused:string, doseadminstered:string, nextduedate:string, vetname:string,
       comment:string): Observable<any> {
      const body ={animalname, animalnumber, dob, species, breed, signsobserved, suspecteddisease , treatmentgiven , treatmentdate, doseused, doseadminstered, nextduedate, vetname, comment}
      return this.http.post<any>(`${this.apiUrl}/disrecord/adddRecord`, body);
    }
  
  
  
    // View Disease Record
  
    getdisRecord(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/disrecord/getdRecord`);
    }


    // Add Cost and Return record

    addcrRecord(date:string,item:string,unit:string,quantity:string,price:string,totalvalue:string,incomeyn:string,costyn:string,typecost:string,comment:string): Observable<any>{
      const body={date,item,unit,quantity,price,totalvalue,incomeyn,costyn,typecost,comment}

      return this.http.post<any>(`${this.apiUrl}/economics/crrecord/addcoRecord`,body);
    }

    
    // get Cost and Return record

    getcrRecord(): Observable<any>{

      return this.http.get<any>(`${this.apiUrl}/economics/crrecord/getcoRecord`);
    }

// Add inventory Cost record

addincRecord(itemd:string,category:string,quantity:string,unitmeasure:string,unitcost:string,totalcost:string,salvagecost:string,age:string,depreciation:string,purchasedate:string,supplier:string,storagelocation:string,remarks:string,source:string
): Observable<any>{

  const body={itemd,category,quantity,unitmeasure,unitcost,totalcost,salvagecost,age,depreciation,purchasedate,supplier,storagelocation,remarks,source}
 
  return this.http.post<any>(`${this.apiUrl}/economics/increcord/addincRecord`,body)
}

// get inventory Cost record

getincRecord():Observable<any>{

  return this.http.get<any>(`${this.apiUrl}/economics/increcord/getincRecord`)
}



// Add Labour Cost record

addlbcRecord(   date:string,labourid:string,labourtype:string,taskperformed:string,hoursworked:string,wagerate:string,dailylcost:string,comment:string
): Observable<any>{

  const body={date,labourid,labourtype,taskperformed,hoursworked,wagerate,dailylcost,comment}
 
  return this.http.post<any>(`${this.apiUrl}/economics/lbcrecord/addlcRecord`,body)
}

// get Labour Cost record

getlbcRecord():Observable<any>{

  return this.http.get<any>(`${this.apiUrl}/economics/lbcrecord/getlcRecord`)
}


// Add Feed Cost record

addfdcRecord( date:String,feedtype:String,quantity:String,unitprice:String,totalcost:String,comment:String
): Observable<any>{

  const body={
date,feedtype,quantity,unitprice,totalcost,comment}
 
  return this.http.post<any>(`${this.apiUrl}/economics/ferecord/getefeRecord`,body)
}

// get Feed Cost record

getfdcRecord():Observable<any>{

  return this.http.get<any>(`${this.apiUrl}/economics/ferecord/getefeRecord`)
}





// Add Daily Feeding record

addfeedRecord( 
date:String,animalgroup:String,feedingredient:String,quantity:String,drymatter:String,totaldm:String,comment:String
): Observable<any>{

  const body={
date,animalgroup,feedingredient,quantity,drymatter,totaldm,comment}
 
  return this.http.post<any>(`${this.apiUrl}/feeding/ferecord/addfeRecord`,body)
}

// get daily Feeding record

getfeedRecord():Observable<any>{

  return this.http.get<any>(`${this.apiUrl}/feeding/ferecord/getfeRecord`)
}



// Add  heat record

addheRecord( 
date: String,animalname: String,animalnumber: String,heatsigns: String,insemenation: String,bullsemen: String,technician: String,comment: String
): Observable<any>{

  const body={
date,animalname,animalnumber,heatsigns,insemenation,bullsemen,technician,comment}
 
  return this.http.post<any>(`${this.apiUrl}/hrecord/puthRecord`,body)
}

// get  Heat record

getheRecord():Observable<any>{

  return this.http.get<any>(`${this.apiUrl}/hrecord/gethRecord`)
}

// Add  Pregnacy record

addpreRecord( 
date: String,animalname: String,animalnumber: String,method: String,result: String,expecteddate: String,comment: String): Observable<any>{

  const body={
date,animalname,animalnumber,method,result,expecteddate,comment
}
 
  return this.http.post<any>(`${this.apiUrl}/prrecord/addprRecord`,body)
}

// get  Pregnacy record

getpreRecord():Observable<any>{

  return this.http.get<any>(`${this.apiUrl}/prrecord/getprRecord`)
}

// Add  calving record

addcalRecord( 
date: String,animalname: String,animalnumber: String,calfname: String,calfnumber: String,calfsex: String,birthweigt: String,calvingease: String,placenta: String,metritis: String,comment: String): Observable<any>{

  const body={
date,animalname,animalnumber,calfname,calfnumber,calfsex,birthweigt,calvingease,placenta,metritis,comment
}
 
  return this.http.post<any>(`${this.apiUrl}/calrecord/getcaRecord`,body)
}

// get  calving record

getcalRecord():Observable<any>{

  return this.http.get<any>(`${this.apiUrl}/calrecord/getcaRecord`)
}






// Add  Key Fertility Metrics Summary (Per Cow or Herd-Level) record

addkfmRecord( 
date: String,animalname: String,animalnumber: String,dfservice: String,dopen: String,calvingInterval: String,conceptionrate: String,serviceperpreg: String,comment: String): Observable<any>{

  const body={
date,animalname,animalnumber,dfservice,dopen,calvingInterval,conceptionrate,serviceperpreg,comment}
 
  return this.http.post<any>(`${this.apiUrl}/calrecord/getcaRecord`,body)
}

// get  Key Fertility Metrics Summary (Per Cow or Herd-Level) record

getkfmRecord():Observable<any>{

  return this.http.get<any>(`${this.apiUrl}/calrecord/getcaRecord`)
}
}