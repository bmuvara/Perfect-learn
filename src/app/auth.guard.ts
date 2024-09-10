import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {jwtDecode} from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userRole = decodedToken.role;

      if (userRole === 'admin' || userRole === 'faculty' || userRole === 'student') {
        return true;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
