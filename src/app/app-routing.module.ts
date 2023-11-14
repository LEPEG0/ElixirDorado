import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './general-page/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './general-page/inicio/login/login.component';
import { RegisterComponent } from './general-page/inicio/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: 'bienvenida', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
