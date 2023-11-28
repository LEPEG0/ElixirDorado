import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './general-page/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './general-page/inicio/login/login.component';
import { RegisterComponent } from './general-page/inicio/register/register.component';
import { RegistarUsuarioComponent } from './general-page/inicio/registar-usuario/registar-usuario.component';
import { VentasVistasComponent } from './general-page/inicio/ventasVistas/ventasVistas.component';
import { ComprasVistasComponent } from './general-page/inicio/compras-vistas/compras-vistas.component';

const routes: Routes = [
  { path: '', redirectTo: '/bienvenida', pathMatch: 'full'},
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'registrarusuario', component: RegistarUsuarioComponent},
  {path: 'ventasvistas', component: VentasVistasComponent},
  {path: 'comprasVistas', component: ComprasVistasComponent},
  { path: '**', redirectTo: 'bienvenida', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
