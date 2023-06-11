import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AllPlayersComponent } from './all-players/all-players.component';
import { AllotPlayersComponent } from './allot-players/allot-players.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'all-player', component:AllPlayersComponent },
  {path:'allot-player', component:AllotPlayersComponent},
  {path:'register', component:RegisterComponent },
  {path:'home' , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
