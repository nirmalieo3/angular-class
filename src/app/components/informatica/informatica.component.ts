import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent implements OnInit {
  testo1: string ="testo di prova"
  testo2: number = 2;
  testo3: string = "Hi";
  constructor() { }

  ngOnInit(): void {
    this.testo1 = "lorum ipsum";
    //this.classeDemo();
  }
  classeDemo(){
    this.testo2 = 3
  }

}
