import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css']
})
export class HomeAdministradorComponent implements OnInit {

  constructor() { }

  userName: string;

  ngOnInit() {
    this.userName = window.sessionStorage.getItem('user_name');
  }

}
