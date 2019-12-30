import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { AddressComponent } from './component/address/address.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [UserComponent, AddressComponent, ProfileComponent],
  imports: [
    CommonModule
  ],
  // exposuring, let others components to use
  exports: [UserComponent, AddressComponent],
  providers: [UserService],
})
export class UserModule { }
