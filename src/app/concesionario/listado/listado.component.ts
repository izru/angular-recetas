import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';
import {Coche} from '../../model/coche';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Input('stockParametro') stock : Array<Coche>;
  //paso de pametro coche, necesario en el import la Input
  //parametro de entrada desde el compoenete padre al hijo
  @Output() eventoEmitir = new EventEmitter(); //parametro de salida, neceario en el impor Output y el EvenEmitter
  //los parametos de salida se realizan a traves de eventos
  constructor() { }

  ngOnInit() {
  }
    /** 
   * funcion para emitir el eventos desde el hijo hacia el padre
   **/
  seleccionar( event, coche : Coche ){
    console.log('ListadoComponent Emitimos evento al ComponentePadre %o', coche );
    this.eventoEmitir.emit(  //event con 2 parametros
                              {
                                 "coche": coche ,
                                 "otroParametro" : 2018
                              }
                          );
  } 

}
