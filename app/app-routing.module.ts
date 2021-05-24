import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {BigCgartComponent} from "./components/big-cgart/big-cgart.component";
import {NoneComponent} from "./components/none/none.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'chart', component: BigCgartComponent},
  {path: 'none', component: NoneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
