import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TagsComponent } from './components/tags/tags.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {path: 'tags', component: TagsComponent},
];
