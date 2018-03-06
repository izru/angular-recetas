import { Component, OnInit } from '@angular/core';
//importar clases
import {Receta} from '../model/recetas';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos
  
  isGlutenFree:boolean;
  iconoGluten:string;
 
 
  isMostrar:boolean;
  glyphicon:string;
  receta:Receta;
  

  constructor() { 
    console.log('RecetaComponent constructor');
    this.receta =new Receta('Marmitako');  
    this.receta.addIngrediente('Patatas'); 
    this.receta.addIngrediente('Atun'); 
    this.receta.addIngrediente('Pimiento');
    this.receta.addIngrediente('Cebolla'); 
    this.receta.addIngrediente('Tomate');   
    //this.receta.descripcion ='Guiso de bonito y patatas tradicional de la cocina vasca';
        
    this.isMostrar=false;
    this.glyphicon='glyphicon-chevron-down';
    
    
  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLikes() {
    console.log('Click sumarlikes');
    this.receta.likes++;
  }
  mostrar(){
    console.log('Click mostrar ingrediensts');
    this.isMostrar =!this.isMostrar;
     this.glyphicon =(this.isMostrar)? 'glyphicon-chevron-up': 'glyphicon-chevron-down';
  }

  

}
