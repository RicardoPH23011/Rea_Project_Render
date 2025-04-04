import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TagsComponent } from './pages/tags/tags.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'tags', component: TagsComponent },
    { path: 'categories', component: CategoriesComponent },
];
