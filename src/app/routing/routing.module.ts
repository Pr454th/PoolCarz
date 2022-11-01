import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RideRegistrationComponent } from '../ride-registration/ride-registration.component';
import { BookRideComponent } from '../book-ride/book-ride.component';
import { PathnotfoundComponent } from '../pathnotfound/pathnotfound.component';

const appRoutes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'ride-register',component:RideRegistrationComponent},
  {path:'bookride',component:BookRideComponent},
  {path:'offerride',component:RideRegistrationComponent},
  {path:'bookride/:user',component:BookRideComponent},
  {path:'**',component:PathnotfoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
