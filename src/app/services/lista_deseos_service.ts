import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';


@Injectable()

export class listaDeseosService {

  listas:any[] = [];
  constructor() {
  }


  getListas() {
      return this.listas;
  }

  guardarLista(lista:Lista){
    this.listas.push(lista);
  }
}
