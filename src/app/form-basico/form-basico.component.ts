import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
export class FormBasicoComponent implements OnInit {
//atributo FormGroup para usar en el HTML=> <form [formGroup]="formulario"
  formulario:FormGroup;
  fruta:string;
  constructor(private fb:FormBuilder) { 
    //inicializacion en html {{fruta}}
    this.fruta="banana";
    //crear formulario
    this.formulario= this.fb.group({
      //nombre es un control, que es parecido a un input
      nombre:[
                '',//value
                [//validaciones
                  Validators.required, 
                  Validators.minLength(3)
                ]
              ]
    });
  }

  ngOnInit() {
  }
  //html => <form  (ngSubmit)="enviar($event)"
  enviar(event){
    console.log('Enviar formulario nombre=%s', this.formulario.controls.nombre.value);
  }

}
