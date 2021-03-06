import { Component, OnInit } from '@angular/core';

//importar clases
import {Usuario} from '../model/usuario';
import {Sexo} from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  //atributos
  usuario:Usuario;
  
 
  constructor() {  

    console.log('UsuarioComponent constructor');
    this.usuario =new Usuario('Pepe');
    this.usuario.apellido= 'Diaz';
    this.usuario.email='pepe@gmail.com';
    this.usuario.avatar = 'data:image/jpeg;base64,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';
    this.usuario.sexo = Sexo.INDETERMINADO;
    
   }

  ngOnInit() {
    console.log('UsuarioComponent ngOnInit');
  }

}
