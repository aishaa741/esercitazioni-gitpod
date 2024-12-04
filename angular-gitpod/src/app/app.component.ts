import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponent } from './secondo/secondo.component';
import { TerzoComponent } from './terzo/terzo.component';

@Component({
  selector: 'app-root',
  imports: [SecondoComponent,TerzoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-gitpod';
}
