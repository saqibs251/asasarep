import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },

  {
    path: 'leads',
    loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule)
  },

  {
    path: 'options',
    loadChildren: () => import('./options/options.module').then(m => m.OptionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
