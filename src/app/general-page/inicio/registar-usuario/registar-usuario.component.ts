import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registar-usuario',
  templateUrl: './registar-usuario.component.html',
  styleUrls: ['./registar-usuario.component.css']
})
export class RegistarUsuarioComponent {
 
  public registrarFG : FormGroup;
  public registrar : ruUser = {
    alias : '',
    password: '',
    eliminar: false,
    modificar: false,
    vista: false
  }

  constructor(
    private fb: FormBuilder,
    public router : Router,
  ){
    this.registrarFG = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      eliminar: false,
      modificar: false,
      vista: false
    })
  }

  ngOnInit(): void {
    
  }
  registrarNuevo(): void{
    this.registrar = {
      alias: this.registrarFG.value.usuario,
      password : this.registrarFG.value.password,
      modificar : this.registrarFG.value.modificar,
      eliminar : this.registrarFG.value.eliminar,
      vista : this.registrarFG.value.vista
    }
    console.log(this.registrar);
  }
}
interface ruUser{
    alias : string,
    password :  string,
    modificar: boolean,
    vista: boolean,
    eliminar: boolean
}

