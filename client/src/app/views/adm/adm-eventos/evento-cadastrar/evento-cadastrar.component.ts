import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-cadastrar',
  templateUrl: './evento-cadastrar.component.html',
  styleUrls: ['./evento-cadastrar.component.css']
})
export class EventoCadastrarComponent implements OnInit {

  fotos: any[] = [
    {id:0,
     url: '../../../../../assets/images/imageOne.jpg'},
    {id:1,
      url: '../../../../../assets/images/geralt2.jpg'},
    {id:2,
      url: '../../../../../assets/images/geralt3.jpg'}
];
  
  constructor() { }

  ngOnInit() {
  }

}
