export class Usuario{
    id:number;
    apellido: string;
    email:string;
    avatar:string;
    sexo:Sexo;
    constructor(){
        this.id=-1;
    }

}
enum Sexo {
    hombre =1 ,
    mujer = 2,
    indefinido = 0  
}