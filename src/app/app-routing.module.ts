import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from '../app/components/profile/profile.component';
import { LandingComponent } from '../app/components/landing/landing.component';
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component';
import { ContactComponent } from '../app/components/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact' , component: ContactComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
