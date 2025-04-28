import { Component, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MatInputModule } from '@angular/material/input';
// import * as particlesJS from 'particles.js/particles';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';


declare var particlesJS: any;

@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatProgressSpinnerModule    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    particlesJS.load('particles-js', 'particlesjs-config.json', () => {
      console.log('Particles.js config loaded');
    });
    this.changeButtonColor();
  }

  loginForm: FormGroup;
  required: any;
  mode : ProgressSpinnerMode = 'indeterminate';
  color : string = 'secondary';
  loading: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.loading = true; // Set loading to true when the request starts
          console.log('Login successful', response);
          // Handle successful login, e.g., redirect to another page
        },
        error: (error) => {
          this.loading = false; // Set loading to false when the request fails
          console.error('Login failed', error);
          // Handle login error, e.g., show an error message
        },
      }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  //Function to add #202020 to the border of the button with id "btn_login"
  changeButtonColor() {
    const button = document.getElementById('btn_login');
    if (button) {
      button.style.borderColor = '#202020';
      button.style.borderWidth = '2px';
      button.style.borderStyle = 'solid';
    }
  }
  

}
