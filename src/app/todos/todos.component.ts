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
  nuevaTarea : string;

  constructor(public todosService:TodosService) { 
    console.log('TodosComponent constructor');
    this.todos=[];
  }

  ngOnInit() {
    console.log('TodosComponent ngOnInit');
    this.cargarTareas();
  }//fin ngOnInit

  cargarTareas(){
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todosService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
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
  eliminar(todo:Todo){
    console.log("TodosComponent eliminar %n", todo.id);

    this.todosService.delete(todo.id).subscribe(
      result=>{
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo eliminar Tarea');
      }
    );
    /*this.todos.forEach((el =>{
      if(el.id ==id){
        var pos = this.todos.indexOf(el );
              this.todos.splice(pos, 1)
      }
      });*/

      /*
    this.todos.forEach( (t, index) =>{
      if ( t.id === todo.id ){
        this.todos.splice(index,1);
        return false; //break        
      }
    });*/
  }
  modificar(todo:Todo){
    console.log("TodosComponent modificar %o", todo);
    this.todosService.update(todo).subscribe(
      result=>{
        console.log('TodosComponent update %o', result);
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo modificar Tarea');
        console.error(error);
      }
    );

    /*this.todos.forEach( (t, index) =>{
      if ( t.id === todo.id ){
        this.todos[index].completed = !todo.completed;
        return false; //break        
      }
    });*/
    /*this.todos.forEach(el =>{
      if(el.id ==todo.id){
        var pos = this.todos.indexOf(el );
        this.todos[pos].completed=todo.completed;       
      }        
    });*/
  }
  
  nueva(){
    console.log("TodosComponent nueva %s", "tarea");
    let todo = new Todo(this.nuevaTarea);
    /*
    let todo = new Todo(this.nuevaTarea);
    this.todos.unshift(todo);
    this.nuevaTarea = "";
    */
    this.todosService.post(todo).subscribe(
      result=>{
        console.log('TodosComponent new %o', result);
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo Crear Nueva Tarea');
        console.error(error);
      }
    );

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
