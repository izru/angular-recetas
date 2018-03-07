import { Injectable } from '@angular/core';
import { Receta } from '../model/recetas';
import { MOCK_RECETAS } from './mocks.recetas';


@Injectable()
export class RecetasService {

  recetas : Receta[];

  constructor() { 
    console.log('RecetasService constructor');
  }


  getAll():Receta[]{
    console.log('RecetasService getAll');
    let jsonData = JSON.parse(MOCK_RECETAS);
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Receta( el.nombre, el.cocinero);
       receta.foto= el.foto;
       receta.descripcion =el.descripcion;
       receta.likes=el.likes;
       receta.cocinero=el.cocinero;
       receta.isGlutenFree=el.isGlutenFree;       
       el.ingredientes.forEach( ing => {
          receta.addIngrediente(ing);
       });

       this.recetas.push(receta);
    });

    return this.recetas;
  }
  /**
   * 
   * @param receta : Receta nueva
   */
  crear(receta):void{
    console.log ('RecetaService crear %o', receta);
    this.recetas.unshift(receta);

  }

}