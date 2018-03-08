import { Component, OnInit } from '@angular/core';
/**
 * lanzar este comando para que funcione y haga que exista
 * en los modulos el import * as $ from 'jquery';
 * 
 * npm install --save-dev jquery
 */
import * as $ from 'jquery';
import { FormGroup,FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CochesService } from '../../provides/coches.service';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb:FormBuilder, public cochesService:CochesService) { 
    console.log('NuevoComponent constructor');
    this.crearFormulario();
  }


  ngOnInit() {
    console.log('NuevoComponent ngOnInit');
  }

  crearFormulario():void{
    console.log('NuevoComponent crearFormulario');
    this.formulario =this.fb.group({
      //FormContros(input) =>['value',[validaciones]
      marca:['',[Validators.required, Validators.minLength(1)]],
      modelo:['',[Validators.required,Validators.minLength(1)]],
      puertas:[3],
      caballos:[100],
      consumo:[7.2],
      version:[''],
      fotoURL:['./assets/img/cocheDefecto.png',[Validators.required]]
      
    });
   
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
   * mapear el resultado de una receta
   * @param form: FormGroup
   */
  mapearFormularioCoche(form: FormGroup):Coche{
     
      let coche =new Coche(form.value.marca,
        form.value.modelo,
        form.value.fotoURL,
        form.value.puertas,
        form.value.caballos,
        form.value.consumo);
    
    coche.version=form.value.version;

    
    return coche;
  }

  sumitar():void{
    console.log('FormularioComponent onSubmit');


    //recoger datos del formulario
    let coche = this.mapearFormularioCoche(this.formulario);

//llamar al servicio
     this.cochesService.crear(coche);

       //limpiar Formulario
    this.formulario.reset({      
      fotoURL:"./assets/img/cocheDefecto.png",
      caballos:100,
      puertas:3,
      consumo:7.2
    });
    
    

    //cerrarModal
    $("#btn-close").click();//cogemos todos los elementos de la clase btn-close y les hacemos click
    //$('#modalReceta').modal('hide');
  }


}
