import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public register : FormGroup

  constructor( 
    private fb : FormBuilder
    ){
      this.register = this.fb.group({
        usuario : ['', Validators.required],
        password : ['', [Validators.required, Validators.minLength(4)]],
        password2 : ['']
      }, { validator : this.checkPassword})
  }

  checkPassword(group : FormGroup) : any {
    const pass = group.controls['password'].value;
    const confirmPass = group.controls['password2'].value
    return pass === confirmPass ? null : {notSame : true}
  }
  reg() : void{
    console.log(this.register);
  }

}
