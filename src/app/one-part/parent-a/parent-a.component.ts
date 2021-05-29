import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/core/services/test.service';

@Component({
  selector: 'app-parent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.scss']
})
export class ParentAComponent implements OnInit {
  message = 'Hola, mundo';
  counter = 0;

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.getProduct().subscribe({
      next: (users) => {
        console.log({users});
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
        alert(error.message);
      },
      complete: () => {
        console.log('COMPLETE');
      }
    });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => console.log(result))
      .catch(error => console.log(error))
      .finally(() => console.log('FINALLY'));
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
