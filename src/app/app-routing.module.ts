import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { YearComponent } from './year/year.component';
import { ProductsComponent } from './products/products.component';
import { LaunchsuccessComponent } from './launchsuccess/launchsuccess.component';


const routes: Routes = 
[
  {path:'product',component:ProductsComponent},
  { path: '', redirectTo: '/product', pathMatch: 'full' },
 {path:'',redirectTo:'ProductsComponent',pathMatch:'full'},
  {path:'user',component:UserComponent},
  {path:'launchsuceess',component:LaunchsuccessComponent},
  {path:'year',component:YearComponent},
  
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
