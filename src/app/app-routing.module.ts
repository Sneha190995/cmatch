import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { MyRecommendationsComponent } from './my-recommendations/my-recommendations.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {  path : "" , redirectTo : "my-recommendations" , pathMatch :"full"},
  { path :'my-recommendations' , component : MyRecommendationsComponent},
  { path : 'dashboard' , component:DashboardComponent },
  { path :'register' , component : RegisterComponent },
  { path : 'login' , component : LoginComponent },
  {  path :'edit-profile' , component : EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
