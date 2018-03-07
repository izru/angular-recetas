import { Component, OnInit } from '@angular/core';
//importaciones
import { Receta } from '../model/recetas';
import { RecetasService } from '../provides/recetas.service';


@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
  listaRecetas:Array<Receta>;// stock : Receta[] array casteado con tipo Coche
  receta: Receta;
 //criterio del buscador
 searchText:string;
 glutenFilter:boolean;
 constructor( private recetasService : RecetasService ) { 
  console.log('RecetarioComponent constructor');
  this.glutenFilter=false;
}
ngOnInit() {
  console.log('RecetarioComponent ngOnInit');
  this.listaRecetas = this.recetasService.getAll();

  this.receta = this.listaRecetas[0] || new Receta('Anonimo');

}

seleccionarReceta( receta : Receta ){
  console.log('RecetarioComponent seleccionarReceta');
  this.receta = receta;
}
changeGlutenFilter(){
  console.log('RecetarioComponent changeGlutenFilter');
  this.glutenFilter=!this.glutenFilter;
}

}

