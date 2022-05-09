import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { CrudComponent } from './crud/crud.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipeComponent } from './pipe/pipe.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsComponent } from './products/products.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {path: '', redirectTo: '/article', pathMatch: 'full'},
  {path:"article",component:ArticleComponent},
  {path:"property-binding",component:PropertyBindingComponent},
  {path:"ngfor",component:NgforComponent},
  {path:"ngif",component:NgifComponent},
  {path:"ngswitch",component:SwitchComponent},
  {path:"react-val",component:ReactiveFormComponent},
  {path:"pipes",component:PipeComponent},
  {path:"home",component:HomeComponent},
  {path:"showemp",component:ShowEmployeeComponent},
  {path:"login",component:LoginComponent},
  {path:"header",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"details/:empId",component:EmpDetailsComponent},
  {path:"crud",component:CrudComponent},
  {path:"products",component:ProductsComponent},
  {path:"product-add",component:ProductsAddComponent},
  {path:"product-edit/:id",component:ProductsEditComponent},
  {path:"**",component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
