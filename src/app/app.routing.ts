import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondPlayerComponent } from './second-player/second-player.component';
import { ConfirmPlayerComponent } from './confirm-player/confirm-player.component';
import { WinComponent } from './win/win.component';
import {FirstPlayerComponent} from './first-player/first-player.component';


const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: FirstPlayerComponent },
  { path: 'second', component: SecondPlayerComponent },
  { path: 'confirm', component: ConfirmPlayerComponent },
  { path: 'win', component: WinComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
