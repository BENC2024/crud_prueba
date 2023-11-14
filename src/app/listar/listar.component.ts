import { Component } from '@angular/core';
import { EGRESO } from '../listaEgresos';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  public misEgresos = EGRESO;

  mostrarEgreso(id:number,descripcion:string, valor:number){
    Swal.fire({
      title: "ID egreso: " + id,
      text: "Descripcion: " + descripcion +", "+ "Valor: " + valor,
      icon: "success"
    })
  }


}
