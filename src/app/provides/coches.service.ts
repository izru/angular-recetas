import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';
import { element } from 'protractor';

@Injectable()
export class CochesService {
  coches:Coche[]=[];
  constructor() { 
    console.log('CochesService constructor');
  }
  /** retorna todos los coches que tenemos en Stock,
   * detras de los : indica el tipo de dato que retorna
   */
  getAll():Coche[]{
   
   
   /*//meter datos coches
   coches.push(new Coche('Seat','Panda','../assets/img/seatpanda.jpg',3,90,5));
   coches.push(new Coche('Toyota','Verso','../assets/img/toyotaverso.jpg',5,95,6));
   coches.push(new Coche('Opel','Corsa','../assets/img/opelcorsa.jpg',5,90,5,'v1.6'));*/
   let coche;
   let jsonData = JSON.parse(MOCKS_COCHES.stock);
   jsonData.forEach( element => {
      
    coche = new Coche( 
                      element.marca, 
                      element.modelo,
                      element.foto, 
                      element.puertas,
                      element.caballos,                      
                      element.consumo,
                      element.version
                      );

    this.coches.push(coche);

});
    return this.coches;

  }
  /**
   * 
   * @param receta : Receta nueva
   */
  crear(coche):void{
    console.log ('CocheService crear %o', coche);
    this.coches.unshift(coche);

  }

}
