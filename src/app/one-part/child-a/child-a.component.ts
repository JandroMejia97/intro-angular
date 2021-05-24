import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-a',
  template: `
  <button (click)="clickEmitter.emit()">
    <app-grand-child-a [text]="buttonText">
    </app-grand-child-a>
  </button>
  `,
  styles: [
    `
    `
  ]
})
export class ChildAComponent implements OnInit {
  @Input()
  buttonText!: string;
  @Output()
  clickEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
