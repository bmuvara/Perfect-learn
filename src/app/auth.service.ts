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
  //Add Course

  addCourse(courseName:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/addCourse`, { courseName });
  }

  // View Course

  getCourses(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/auth/getCourses`);
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
}


