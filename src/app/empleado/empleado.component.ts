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
  //empresa="Pildoras informaticas";

  getEdad() {
    return this.edad;
  }

  getEmpresa(value:String) {

  }

  constructor() {}
  
}
