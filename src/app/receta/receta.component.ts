import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos
  nombre:string;
  foto:string;
  imagen:string;
  likes:number;
  descripcion: string;
  isGlutenFree:boolean;
  iconoGluten:string;
  cocinero:string;
  ingredientes:string[];

  constructor() { 
    console.log('RecetaComponent constructor');
    this.nombre='Tortilla patatas';
    this.foto='https://www.divinacocina.es/wp-content/uploads/tortilla-de-patatas-porcion-cortada.jpg';
    this.likes=15;
    this.descripcion='Jugosa tortilla con huevo y patatas';
    this.isGlutenFree= true;   
    this.cocinero='Carlos Arguiñano';
    this.ingredientes=['Calamares','Limon','Salsa AliOli','Pan'];
    
    
  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLikes() {
    console.log('Click sumarlikes');
    this.likes++;
  }

  

}
