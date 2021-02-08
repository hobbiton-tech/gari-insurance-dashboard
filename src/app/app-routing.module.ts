import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavigationComponent} from './navigation/navigation.component'

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'dashboard', component: NavigationComponent, children: [
    { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
    { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
