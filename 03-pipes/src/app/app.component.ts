import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Patricio Horth ';
  arreglo = [1,2,3,4,5,6,7,8,9];
  objeto =  {
    campo1: 'campo1',
    campo2: 'campo2'
  };
  numero = 3.141516;
}
