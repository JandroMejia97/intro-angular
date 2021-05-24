import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-child-a',
  templateUrl: './grand-child-a.component.html',
  styleUrls: ['./grand-child-a.component.scss']
})
export class GrandChildAComponent implements OnInit {
  @Input()
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
