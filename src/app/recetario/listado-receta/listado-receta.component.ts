import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Receta } from '../../model/recetas';

@Component({
  selector: 'app-listado-receta',
  templateUrl: './listado-receta.component.html',
  styleUrls: ['./listado-receta.component.scss']
})
export class ListadoRecetaComponent implements OnInit {
  @Input('stockParametro') stock : Array<Receta>;
  //paso de pametro coche, necesario en el import la Input
  //parametro de entrada desde el compoenete padre al hijo
  @Output() eventoEmitir = new EventEmitter(); //parametro de salida, neceario en el impor Output y el EvenEmitter
  //los parametos de salida se realizan a traves de eventos
  @Input('recetaParametro') receta:Receta;
  constructor() { }

  ngOnInit() {
  }
   /** 
   * funcion para emitir el eventos desde el hijo hacia el padre
   **/
  seleccionar( event, receta : Receta ){
    console.log('ListadoRecetaComponent Emitimos evento al ComponentePadre %o', receta );
    this.eventoEmitir.emit(  //event con 2 parametros
                              {
                                 "receta":receta                                 
                              }
                          );
                        }

}
