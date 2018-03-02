export class Usuario{
    //atributos
    id:number;
    nombre:string;
    apellido: string;
    email:string;
    avatar:string;
    sexo:Sexo;
    constructor(nombre:string){
        console.log('Usuario constructor');
        this.id=-1;
        this.nombre=nombre;
        this.sexo=Sexo.INDETERMINADO;
    }
    toString(){
        console.log(`Usuario nombre=${this.nombre}`)
    } 

}

export enum Sexo {
    FEMENINO ="Femenino" ,
    MASCULINO="Masculino",
    INDETERMINADO ="Indeterminado" 
}
