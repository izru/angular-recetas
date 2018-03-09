import { Injectable } from '@angular/core';
	
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT="http://localhost:3000";
//"https://jsonplaceholder.typicode.com"; //va a ser donde esta nuestro servicio,
//no puedes definir una constante como un atributo de una clase
//"http://localhost:3000/"  lo ponemos en local, tener avierto json y postman

@Injectable()
export class TodosService {

  constructor(public http: HttpClient) // inyectamos el objeto HttpClient, y asi podemos usar la variable http para usar ajax
  {
    console.log ("TodosService constructor");
  }
  getTodos():Observable<any>{
    //observable, permite recoger los datos al vuelo
    let url=END_POINT+`/todos`;
    //+`/todos?userId=2`;
    console.log(`TodoService getTodos ${url}`);
    return this.http.get(url);
  }

}
