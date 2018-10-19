import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';


@Injectable()

export class listaDeseosService {

  listas:any[] = [];
  constructor() {

    let lista1 = new Lista('Compras super');
    let lista2 = new Lista('Compras school');
    let lista3 = new Lista('Compras trabajo');


    console.log('servicio inicializado');
    this.listas.push(lista1, lista2, lista3);

    console.log(this.listas);
  }


  getListas() {
      return this.listas;
  }
}
