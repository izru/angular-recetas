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
import { FormGroup,FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario:FormGroup;
  ingredientes:FormArray;

  constructor(private fb:FormBuilder, public recetasService: RecetasService) { 
    console.log('FormularioComponent constructor');
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
    //es lo mismo, pero mejor un get
    //this.ingredientes = this.formulario.controls('ingredientes') as FormArray;
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
      gluten:["true",[Validators.required]],
      fotoURL:['./assets/img/cocheDefecto.png',[Validators.required]],
      ingredientes:this.fb.array([this.createIngredienteFormGroup()],Validators.required)
    });
   
  }
  sumitar():void{
    console.log('FormularioComponent onSubmit');


    //recoger datos del formulario
    let receta = this.mapearFormularioReceta(this.formulario);

//llamar al servicio
     this.recetasService.crear(receta);

       //limpiar Formulario y poner un solo ingrediente
    this.formulario.reset({
      gluten:"true",
      fotoURL:"./assets/img/cocheDefecto.png"
    });
    
    this.ingredientes.controls.splice(1);

    //cerrarModal
    $("#btn-close").click();//cogemos todos los elementos de la clase btn-close y les hacemos click
    //$('#modalReceta').modal('hide');
  }

  createIngredienteFormGroup(){
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre:['',[Validators.required]]
    });
  }
  /**
   * mapear el resultado de una receta
   * @param form: FormGroup
   */
  mapearFormularioReceta(form: FormGroup):Receta{
    
    let receta =new Receta(form.value.nombre);
    receta.cocinero= form.value.cocinero;
    receta.isGlutenFree=(form.value.gluten ==="true")?true:false;
    receta.foto=form.value.fotoURL;
    receta.descripcion=form.value.descripcion;

    //recuperar los ingredientes.
    //map es como un foreach
    form.value.ingredientes.map(element => {
      receta.addIngrediente( element.nombre );
    });
    //form.value.ingredientes.foreach(element=>{
      //receta.addIngrediente(element.nombre)
    //});
    return receta;
  }
  /**
   * Nos retorna las clases para darle estilos al div que contiene el input
   * @param control : FormControl
   */
  estilosInput(control:FormControl):string{
    const CLASS_SUCCESS= "form-group form-inline has-success";
    const CLASS_ERROR= "form-group form-inline has-error";
    if(control.dirty){
      return(control.valid)?CLASS_SUCCESS:CLASS_ERROR;
    }else{
    return "form-group form-inline";
    }
  }
  /** 
   * Evento para crear un nuevo Ingrediente
  */
 clickOtroIngrediente(){
  console.log('FormularioComponent clickOtroIngrediente');    
  this.ingredientes.push( this.createIngredienteFormGroup() );
}

clickEliminarIngrediente( index ){
  console.log('FormularioComponent clickEliminarIngrediente');    
  this.ingredientes.removeAt(index);
}


  
  

}
