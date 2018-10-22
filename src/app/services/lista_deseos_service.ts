import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';


@Injectable()

export class listaDeseosService {

  listas:any[] = [];
  constructor() {

    this.cargarData()
  }


  actualizarData(){
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData(){

    if (JSON.parse(localStorage.getItem("data"))){
      this.listas = JSON.parse(localStorage.getItem("data"));

    }
  }

  getListas() {
      return this.listas;
  }

  guardarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }
}
