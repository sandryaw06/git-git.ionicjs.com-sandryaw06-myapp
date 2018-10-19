import { Component } from '@angular/core';
import { listaDeseosService } from '../../app/services/lista_deseos_service';

import { NavController } from 'ionic-angular';

import { verItemsComponent } from '../ver-items/ver-items.component';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent  {

  listas:any[] = [];

  constructor(
    private _service:listaDeseosService,
    private _navCtr:NavController
  ) {
    this.listas  = this._service.getListas();
  }


  verItemsLista(nombre:string){
    console.log('verItemsLista');
    this._navCtr.push( verItemsComponent );

  }

  addItem(){
    this._navCtr.push( AddItemComponent );
  }
}
