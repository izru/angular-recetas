import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../provides/recetas.service';
/**
 * lanzar este comando para que funcione y haga que exista
 * en los modulos el import * as $ from 'jquery';
 * 
 * npm install --save-dev jquery
 */
import * as $ from 'jquery';

import { Receta } from '../../model/recetas';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;

  constructor(private fb:FormBuilder, public recetasService: RecetasService) { 
    console.log('FormularioComponent constructor');
    this.crearFormulario();
  }

  ngOnInit() {
    console.log('FormularioComponent ngOnInit');
  }
  crearFormulario():void{
    console.log('FormularioComponent crearFormulario');
    this.formulario =this.fb.group({
      //FormContros(input) =>['value',[validaciones]
      nombre:['',[Validators.required, Validators.minLength(2)]],
      cocinero:['',[Validators.minLength(5)]],
      descripcion:['',[Validators.required, Validators.minLength(100)]],
      fotoURL:['./assets/img/cocheDefecto.png',[Validators.required]]

    });
   
  }
  sumitar():void{
    console.log('FormularioComponent onSubmit');
    //TODO recoger datos del formulario
    let nombre = this.formulario.value.nombre;


    let receta =new Receta(nombre);
    this.recetasService.crear(receta);
    //cerrarModal
    $("#btn-close").click();//cogemos todos los elementos de la clase btn-close y les hacemos click
    //$('#modalReceta').modal('hide');
  }
  
  

}
