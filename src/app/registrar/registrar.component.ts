import { Component } from '@angular/core';
import { EGRESO } from '../listaEgresos';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {

  descripcion = ""
  valor = 0

  registrarProducto(){
    let nuevoRegistro =  { descripcion: this.descripcion, valor: this.valor }
    EGRESO.push(nuevoRegistro)
    console.log(nuevoRegistro)
  }
}
