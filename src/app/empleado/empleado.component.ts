import { isIdentifier } from '@angular/compiler';
import { Component } from '@angular/core';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {

  nombre ="Juan";
  apellido="Perez";
  private  edad = 18;
  empresa = "juataco";

  
  usuRegistrado = false;
  habilitacionCuadro =false;
  textoDeRegistro="No hay nadie registrado";

getRegistroUsuario(value :boolean){
  this.usuRegistrado =  !value ;
  if (this.usuRegistrado)
  {
   // this.setUsuarioRegistrado();
   this.textoDeRegistro = "EL usuairo se acaba de registrar";
  }
  else {
    this.textoDeRegistro = this.textoDeRegistro;
  }
}

cambiaNombre(event: Event)
{
  this.nombre = (<HTMLInputElement>event.target).value;
}


getRegistroOption(event :Event){
  
  this.usuRegistrado =  !this.usuRegistrado ;

  if ((<HTMLInputElement>event.target).value == "si")
  {
    this.textoDeRegistro = "EL usuairo se acaba de registrar";
  }else{
    this.textoDeRegistro = "No hay nadie registrado";
  }

}


setUsuarioRegistrado(){
  alert("El usuario se acaba de registrar");
}

  getEdad(){
    return this.edad;
  }

  llamaEmpresa(value:string){
this.empresa = value;
  }


}
