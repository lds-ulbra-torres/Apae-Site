import { HttpClient } from '@angular/common/http';
import { LoginService } from './../components/adm/login/login.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private _loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{
    
    if(this._loginService.userIsLogged()) {
      return true;
    }

    this.router.navigate(['admin/login']);
    return false;
  }

}
