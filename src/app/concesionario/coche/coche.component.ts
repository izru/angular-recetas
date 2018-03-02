import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Coche} from '../../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {
  @Input('cocheParametro') coche:Coche; //paso de pametro coche, necesario en el import la Input
  //parametro de entrada desde el compoenete padre al hijo
  
  constructor() {   
    console.log('CocheComponent constructor')  ;
  }

  ngOnInit() {
    console.log('CocheComponent ngOnInit')  ;
  }

   
  
}
