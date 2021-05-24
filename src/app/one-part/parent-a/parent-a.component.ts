import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.scss']
})
export class ParentAComponent implements OnInit {
  message = 'Hola, mundo';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeMessage(value: string) {
    this.message = value;
  }

  aumentar() {
    this.counter++;
  }

  decrementar() {
    this.counter--;
  }

}
