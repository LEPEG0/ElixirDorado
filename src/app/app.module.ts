import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './general-page/inicio/inicio.component';
import { BienvenidaComponent } from './general-page/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './general-page/inicio/login/login.component';
import { RegisterComponent } from './general-page/inicio/register/register.component';
import { RegistarUsuarioComponent } from './general-page/inicio/registar-usuario/registar-usuario.component';
import { CommonModule } from '@angular/common';
import { VentasVistasComponent } from './general-page/inicio/ventasVistas/ventasVistas.component';
import { ComprasVistasComponent } from './general-page/inicio/compras-vistas/compras-vistas.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    RegistarUsuarioComponent,
    VentasVistasComponent,
    ComprasVistasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
