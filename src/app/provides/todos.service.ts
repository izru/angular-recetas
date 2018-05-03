import { Injectable } from '@angular/core';
	
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../model/todos';
import { GLOBAL } from '../global';

const END_POINT=GLOBAL.endpoint;
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
    let url=GLOBAL.endpoint+`/todos`;
    //+`/todos?userId=2`;
    console.log(`TodoService getTodos ${url}`);
    return this.http.get(url);
  }

  delete(id){
    let url = GLOBAL.endpoint + '/todos/'+id;
    console.log(`TodosService delete ${url}`);
    return this.http.delete(url);
  }

 update(todo:Todo){
    let url = GLOBAL.endpoint + '/todos/'+todo.id;
    //es lo mismo
    //let url = `${GLOBAL.endpoint}/todos/`+todo.id;
    console.log(`TodosService update ${url}`);
    
    let body = {      
      "completed": !todo.completed    
    } 
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.patch( url, body , httpOptions );
  }

  post(todo:Todo){
    let url = GLOBAL.endpoint + '/todos/';
    console.log(`TodosService put ${url}`);

    let body = {
                  // "id": todo.id,
                  "userId": todo.idUser,
                  "title": todo.title,
                  "completed": todo.completed    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }

}
