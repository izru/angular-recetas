import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/recetas';
@Pipe({
  name: 'filtrosRecetas'
})
export class FilterPipe implements PipeTransform {
/**
 * filtro para buscar en una coleccion de coches. no es CaseSensitive
 * @param listaRecetas : Coche[] array o coleccion de coches
 * @param searchText : string con la marca o modelo de coche
 */
  transform(listaRecetas: Receta[], searchText: string): Receta[] {

    if(!listaRecetas) return [];
    if(!searchText) return listaRecetas;
    searchText = searchText.toLowerCase();
    let buscar ="";
    return listaRecetas.filter( recetaIt => {
        buscar=recetaIt.nombre;
        buscar=buscar.toLowerCase();
        return  buscar.includes(searchText);
    });
   }

}