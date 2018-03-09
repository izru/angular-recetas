import { Component, OnInit } from '@angular/core';
import { TodosService } from '../provides/todos.service';
import { Todo } from '../model/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(public todosService:TodosService) { 
    console.log('TodosComponent constructor');
    this.todos=[];
  }

  ngOnInit() {
    console.log('TodosComponent ngOnInit');
    this.todosService.getTodos().subscribe(
      resultado =>{
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);          
      },
      error =>{
        console.warn('peticion incorrecta %o', error);
      }
    );//fin suscribe
  }//fin ngOnInit
  //mapea los resultados json a todos que provienen del servicio rest
  mapeo(resultado:any){
    let todo:Todo;
    resultado.forEach(el =>{
      todo=new Todo(el.title);
      todo.id=el.id;
      todo.idUser=el.userId;
      todo.completed=el.completed;

      this.todos.push(todo);
    });

  }
  eliminar(id:number){
    console.log("TodosComponent eliminar %n", id);
    this.todos.forEach(el =>{
      if(el.id ==id){
        var pos = this.todos.indexOf(el );
              this.todos.splice(pos, 1)
      }
      });
  }
  modificar(id:number){
    console.log("TodosComponent modificar %n", id);
  }
  cambiarCheck(todo:Todo){
    console.log("TodosComponent modificar %o", todo);

    
    this.todos.forEach(el =>{
      if(el.id ==todo.id){
        var pos = this.todos.indexOf(el );
        this.todos[pos].completed=todo.completed;       
      }        
    });

  }
  nueva(tarea: string){
    console.log("TodosComponent nueva %s", "tarea");

  }

  /**
   * Nos retorna las clases para darle estilos al div que contiene el input
   * @param control : FormControl
   */
  estilos(completado:boolean):string{
    const CLASS_COMPLETADO= "completa";   
    
      return(completado)?CLASS_COMPLETADO:"";
    
  }

}
