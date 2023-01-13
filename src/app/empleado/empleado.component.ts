import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {
  nombre="Juan";
  apellido="Díaz";
  private edad=18;
  empresa="Google";

  habilitacionCuadro = false;

  usuRegistrado = true;

  textoDeRegistro = "No hay nadie registrado";

  // cambiaEmpresa(event:Event) {
  //   this.empresa = (<HTMLInputElement>event.target).value;
  // }

  getEdad() {
    return this.edad;
  }

  getEmpresa(value:String) {

  }
  
  getRegistroUsuario(){
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se acaba de registrar");
    if((<HTMLInputElement>event.target).value=="si") {
      this.textoDeRegistro = "El usuario se acaba de registrar"
    } else {
      this.textoDeRegistro = "No hay nadie registrado"
    }
  }

  constructor() {}
  
}
