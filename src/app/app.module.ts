import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './general-page/inicio/inicio.component';
import { BienvenidaComponent } from './general-page/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './general-page/inicio/login/login.component';
import { RegisterComponent } from './general-page/inicio/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
