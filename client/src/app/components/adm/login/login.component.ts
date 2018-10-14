import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = new Date();
  anoAtual = this.data.getFullYear();
  falhaLogin: boolean = false;
  checklogin: string;

  constructor(private _loginService: LoginService,
              private router: Router) {
               }

  ngOnInit() {
  }

  onSubmit(form){
    let user = new FormData();
    user.append('email', form.value.emailUser);
    user.append('password', form.value.passwordUser);

    this._loginService.consultarLogin(user)
      .subscribe(
        (val) => {
          window.sessionStorage.setItem('userLogged',"true");
          window.sessionStorage.setItem('user_name',form.value.emailUser);
          this.router.navigate(['admin/dashboard'])
        },
        response => {
          this.falhaLogin = true;
        }
      );
  }

}
