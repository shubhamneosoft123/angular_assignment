import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { CrudComponent } from './crud/crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ArticleComponent } from './article/article.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { SwitchComponent } from './switch/switch.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { OrderModule } from 'ngx-order-pipe';
import { NewPipePipe } from './new-pipe.pipe';
import { CharPipe } from './char.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    ArticleComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ShowEmployeeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    EmpDetailsComponent,
    CrudComponent,
    ProductsComponent,
    ProductsAddComponent,
    ProductsEditComponent,
    PropertyBindingComponent,
    NgforComponent,
    NgifComponent,
    SwitchComponent,
    ReactiveFormComponent,
    PipeComponent,
    NewPipePipe,
    CharPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    OrderModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
