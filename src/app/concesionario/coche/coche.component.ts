import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Coche} from '../../model/coche';
import {RoundPipe} from '../../pipes/round.pipe';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {
  @Input('c1') c1:Coche; //paso de pametro coche, necesario en el import la Input
  //parametro de entrada desde el compoenete padre al hijo
  //coche para mostrar
  @Input('c2') c2:Coche; // coche para comparar
  
  constructor() {   
    console.log('CocheComponent constructor')  ;
  }

  ngOnInit() {
    console.log('CocheComponent ngOnInit')  ;
  }

   
  
}
