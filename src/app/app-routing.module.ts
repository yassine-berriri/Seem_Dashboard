import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './core/admin-dashboard/admin-dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent },
  {path:'admin-dashboard', component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
