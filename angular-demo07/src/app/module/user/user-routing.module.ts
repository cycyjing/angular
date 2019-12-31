import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { AddressComponent } from './component/address/address.component';
import { ProfileComponent } from './component/profile/profile.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'address', component: AddressComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
