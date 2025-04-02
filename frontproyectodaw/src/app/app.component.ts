import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontproyectodaw';


  constructor(private http: HttpClient) {}


}
