import { Component } from '@angular/core';
import  { RouterLink, RouterLinkActive, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-students',
  standalone: true,
  imports:[
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './dashboard-students.component.html',
  styleUrl: './dashboard-students.component.scss'
})
export class DashboardStudentsComponent{
  constructor(private router: Router) {}

  //functionto redirect
  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
