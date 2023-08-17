import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import pages

import { HomeComponent } from './pages/home/home.component';
import { AddTransactionComponent } from './pages/add-transaction/add-transaction.component';
import { AboutComponent } from './pages/about/about.component';

//aplication routes
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'add',component:AddTransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
