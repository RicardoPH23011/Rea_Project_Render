import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MainMenuComponent,
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIcon,
    MatButtonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontproyectodaw';
  isSidenavOpen = true;


  constructor(private http: HttpClient) {}

  toggleMenu() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  ngOnInit(): void {
    this.saveUser('1');
  }
  
  // Funcion para guar usuario en localstorage
  saveUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }


}
