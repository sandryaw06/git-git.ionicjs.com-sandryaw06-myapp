import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
  selector: 'add-item',
  templateUrl: 'add-item.component.html',
})
export class AddItemComponent implements OnInit {

  new_item:string = '';

  constructor() {  }

  ngOnInit() {}

  addNewItem(){

  }

  mostrar(){
    console.log(this.new_item);
  }
}
