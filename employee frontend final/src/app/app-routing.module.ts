import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductComponent } from './product/product.component';
import { PosComponent } from './pos/pos.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';


const routes: Routes = [

  {path:"show-all-employees",component: EmployeeListComponent},
  {path:"add-employee", component: AddEmployeeComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateEmployeeComponent},
  {path:'update-product-by-id/:id',component:UpdateProductComponent},
  {path:'details-of-employee/:id',component:ShowDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:AdminLoginComponent},
  {path:'product',component:ProductComponent},
  {path:'pos',component:PosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
