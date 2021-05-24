import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;
};

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {
  hiddenItems: Person[] = [
    { firstName: 'Pedro', lastName: 'Gonzalez '},
    { firstName: 'Maria', lastName: 'Gonzalez '},
    { firstName: 'Hugo', lastName: 'Gonzalez '},
    { firstName: 'Luciana', lastName: 'Gonzalez '},
    { firstName: 'Rosmery', lastName: 'Gonzalez '},
  ];
  items: Person[] = [];
  color: string;

  constructor() { }

  ngOnInit(): void {
  }

  addFamilyMember(): void {
    this.items.push(this.hiddenItems.pop());
  }

  removeFamilyMember(): void {
    this.hiddenItems.push(this.items.pop());
  }

}
