import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { TagsComponent } from './pages/tags/tags.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LicensesComponent } from './pages/licenses/licenses.component';
import { ResourceComponent } from './pages/resource/resource.component';
import { DashboardStudentsComponent } from './pages/dashboard-students/dashboard-students.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RegisterComponent } from './auth/register/register.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { PreferencesComponent } from './pages/preferences/preferences.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'tags', component: TagsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'licenses', component: LicensesComponent },
    { path: 'resources', component: ResourceComponent },
    {path: 'dashboard', component: DashboardStudentsComponent},
    { path: '', component: LandingComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'perfil', component: PerfilComponent},
    {path: 'informacion', component: InformacionComponent},
    {path: 'preferences', component: PreferencesComponent},
];
