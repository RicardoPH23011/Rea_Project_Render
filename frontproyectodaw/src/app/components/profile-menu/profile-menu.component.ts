import { Component } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-menu',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent {

  nombre: string = '';
  email: string = '';
  rol: string = '';
  avatar: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getUserName();
    const email = this.authService.getUserEmail();
    const rol = this.authService.getUserRole();
    const avatar = this.authService.getUserAvatar();
    if (rol) {
      this.rol = rol;
    }
    if (user) {
      this.nombre = user;
    }
    if (email) {
      this.email = email;
    }
    if (avatar) {
      this.avatar = avatar;
    }
  }

}
