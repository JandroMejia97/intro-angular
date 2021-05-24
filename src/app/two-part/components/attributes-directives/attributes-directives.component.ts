import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes-directives',
  templateUrl: './attributes-directives.component.html',
  styleUrls: ['./attributes-directives.component.scss']
})
export class AttributesDirectivesComponent implements OnInit {
  hasRedText = false;
  hasBackgroundGray = false;
  hasGreenBorder = false;

  currentClasses = {};
  currentStyles = {};


  constructor() { }

  ngOnInit(): void {
    // this.setCurrentClasses();
    // this.setCurrentStyles();
  }

  setCurrentClasses(): void {
    this.currentClasses = {
      'red-text': this.hasRedText,
      'green-border': this.hasGreenBorder,
      'gray-background': this.hasBackgroundGray
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'color':  this.hasRedText  ? 'red' : 'inherit',
      'border': this.hasGreenBorder ? '1px solid green' : 'none',
      'background-color':   this.hasBackgroundGray ? 'gray' : 'inherit'
    };
  }

}
