import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Receta } from '../../model/recetas';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {
  @Input('recetaParametro') receta:Receta;
  constructor() { }

  ngOnInit() {
  }

}
