import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private apiService: ApiService, private http: HttpClient) { }

    login(email: string, password: string): Observable<any> {
        return this.http.post(this.apiService.API_ENDPOINTS.authentication.login, { "email": email, "password": password })
            .pipe(tap((response: any) => {
                if (response && response.token) {
                    sessionStorage.setItem('token', response.token);
                }
            }));
    }

    register(name: string, email: string, password: string, rol: string): Observable<any> {
        return this.http.post(this.apiService.API_ENDPOINTS.authentication.register, { name, email, password, rol });
    }

    logout(): void {
        sessionStorage.removeItem('token');
    }

    isLoggedIn(): boolean {
        return !!sessionStorage.getItem('token');
    }

    getUserId(): string | null {
        return sessionStorage.getItem('user');
    }

}
