import { Component, OnInit } from '@angular/core';

import { ApaeTorresService } from './../../services/apae-torres.service';

@Component({
  selector: 'app-apae-torres',
  templateUrl: './apae-torres.component.html',
  styleUrls: ['./apae-torres.component.css']
})
export class ApaeTorresComponent implements OnInit {

  apaeTorres: any[];

  assist: boolean = false;
  edu: boolean = false;
  saude: boolean = false;

  constructor(private apaeTorresService: ApaeTorresService) { }

  ngOnInit() {

    this.getAbout();
  }
  getAbout(){
    this.apaeTorresService.getAbout().subscribe((res) => {
      this.apaeTorres = res;
    });
  }

  toggleAssistP(){
    this.assist = !this.assist;
  }

  toggleEduP(){
    this.edu = !this.edu;
  }

  toggleHealthP(){
    this.saude = !this.saude;
  }

}
