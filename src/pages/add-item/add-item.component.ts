import { Component } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { NavController } from 'ionic-angular';

import { PendientesComponent } from '../pendientes/pendientes.component';
import { listaDeseosService } from '../../app/services/lista_deseos_service';

@Component({
  selector: 'add-item',
  templateUrl: 'add-item.component.html',
})
export class AddItemComponent  {

  new_item:string = '';
  lista_name:string = '';
  new_lista:ListaItem[] = [];
  lista:Lista;

  constructor(
    private _service:listaDeseosService,
    private _navCtr:NavController
  ) {  }


  mostrar(){
    if (this.new_item != ''){
      let item:ListaItem = new ListaItem(this.new_item);
      this.new_lista.push(item);
      this.exists_elements = true;
    }
    this.new_item = '';
  }

  eliminar(position:number){
    this.new_lista.splice(position, 1);
  }

  saveList(){
    this.lista = new Lista(this.lista_name);
    this.lista.items = this.new_lista;

    this._service.guardarLista(this.lista);
    // this._navCtr.push( PendientesComponent );
    this._navCtr.pop();

  }
}
