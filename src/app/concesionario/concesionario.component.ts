import { Component, OnInit } from '@angular/core';
//importaciones
import {Coche} from '../model/coche';
import { CochesService } from '../provides/coches.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {
  stock:Array<Coche>;//array casteado con tipo Coche
  //stock:Coche[];
  coche1: Coche;
  coche2: Coche;
  constructor(public cochesService:CochesService) { 
    console.log('ConcesionarioComponent constructor');

    this.coche1 =new Coche('','','',0,0,0);
    this.coche2 =new Coche('','','',0,0,0);

    this.stock=new Array<Coche>();
    /* estos datos nos los provee el Servicio
    //meter datos coches
    this.stock.push(new Coche('Seat','Panda','../assets/img/seatpanda.jpg',3,90,5));
    this.stock.push(new Coche('Toyota','Verso','../assets/img/toyotaverso.jpg',5,95,6));
    this.stock.push(new Coche('Opel','Corsa','../assets/img/opelcorsa.jpg',5,90,5,'v1.6'));
    */
  }
//llamadas a los servicios
  ngOnInit() {
    console.log('ConcesionarioComponent ngOnInit');
    this.stock=this.cochesService.getAll();
  }
  
  recibirCoche(event){
    console.log('ConcesionarioComponent: recibirCoche %o %i', event.coche , event.otroParametro);               
    this.coche2 = this.coche1;
    this.coche1 = event.coche;   
  }
  

}
