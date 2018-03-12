import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import {NewcompetitionComponent} from "./competition/newcompetition/newcompetition.component";
import {ListcompetitionComponent} from "./competition/listcompetition/listcompetition.component";
import {EditcompetitionComponent} from "./competition/editcompetition/editcompetition.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/competitionlist', pathMatch: 'full' }
 ,
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'competitionlist', component: ListcompetitionComponent },
  { path: 'competitionlcreate', component: NewcompetitionComponent },
  { path: 'competitionedit/edit/:id', component: EditcompetitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
