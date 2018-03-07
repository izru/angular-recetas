import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/recetas';
@Pipe({
  name: 'filtrosRecetas'
})
export class FilterRecetas implements PipeTransform {
/**
 * filtro para buscar en una coleccion de coches. no es CaseSensitive
 * @param listaRecetas : Coche[] array o coleccion de coches
 * @param searchText : string con la marca o modelo de coche
 */
  transform(listaRecetas: Receta[], searchText: string, isGlutenFree:boolean): Receta[] {

    console.log(`Activado filtro de isGlutenFree ${isGlutenFree}`);
    //si no hay recetas retornar vacio
    if (!listaRecetas) return [];

    let recetasFilterArray: Receta[] = [];

    //Filtramos si llevan gluten o no
    if (isGlutenFree) {
      listaRecetas.forEach(it => {
        if (it.isGlutenFree) {
          recetasFilterArray.push(it);
        }
      });
    } else {
      recetasFilterArray = listaRecetas;
    }

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return recetasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let receta = '';
      return recetasFilterArray.filter(it => {
        receta = it.nombre + it.ingredientes + it.cocinero;
        receta = receta.toLowerCase();
        return receta.includes(searchText);
      });
    }
  }

}