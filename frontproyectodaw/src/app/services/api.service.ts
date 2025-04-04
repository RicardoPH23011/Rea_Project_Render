import { Injectable } from '@angular/core';

// Environment file
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = environment.apiUrl; // URL base de la API

  // Endpoint de la API
  API_ENDPOINTS = {
    authentication: {
      login: `${this.apiUrl}/auth/login`,
      register: `${this.apiUrl}/auth/register`
    },
    ressources: {
      getAll: `${this.apiUrl}/ressources`,
      getById: (id: number) => `${this.apiUrl}/ressources/${id}`,
      create: `${this.apiUrl}/ressources`,
      update: (id: number) => `${this.apiUrl}/ressources/${id}`,
      delete: (id: number) => `${this.apiUrl}/ressources/${id}`
    },
    tags: {
      getAll: `${this.apiUrl}/tags`,
      getById: (id: number) => `${this.apiUrl}/tags/${id}`,
      create: `${this.apiUrl}/tags-menu/tags`,
      update: (id: number) => `${this.apiUrl}/tags/${id}`,
      delete: (id: number) => `${this.apiUrl}/tags/${id}`
    },
    categories: {
      getAll: `${this.apiUrl}/categories`,
      getById: (id: number) => `${this.apiUrl}/categories/${id}`,
      create: `${this.apiUrl}/categories`,
      update: (id: number) => `${this.apiUrl}/categories/${id}`,
      delete: (id: number) => `${this.apiUrl}/categories/${id}`
    },
  };
}