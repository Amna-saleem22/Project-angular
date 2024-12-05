import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
 
  {
   path: 'Contact',
   component: ContactComponent
  },
  { path: 'login',
   component: LoginComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },

  {
    path: '**',
    component: HomeComponent 
  }
];
