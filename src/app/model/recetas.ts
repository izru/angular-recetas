/*clase para encapsular los atributos de una Receta*/
export class Receta{
    id:number;
    nombre: string;
    foto:string; 
    likes:number;
    descripcion: string;
    isGlutenFree:boolean;
    iconoGluten:string;
    cocinero:string;
    ingredientes:string[] ;
    //solo es posible un constructor
    constructor(nombre:string, 
        cocinero:string="anonimo") //valor por defecto si es undefined o sin parametro        
            
        {
        console.log('Receta constructor');
        this.id=-1;
        this.nombre=nombre;
        this.foto= '/assets/img/receta_default.jpg';  
        this.likes=0;
        this.cocinero = cocinero;
        this.descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem ipsum repellat consectetur deserunt doloribus sequi explicabo laudantium, deleniti, id totam, neque laborum debitis quia doloremque officiis incidunt labore ut.';
        this.isGlutenFree=false;  
        this.ingredientes=[];
        this.toString();
    }
    toString(){
        console.log(`Receta nombre=${this.nombre}`)
    }
    addIngrediente(ingrediente:string){
        this.ingredientes.push(ingrediente)
    }
}   