import { Component } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile-menu',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent {

  user = {
    name: 'Franklin Gómez',
    avatarUrl: '../../../assets/image-profile/profile-image.png'
  };
}
