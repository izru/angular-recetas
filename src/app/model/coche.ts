export class Coche{
    id:number;
    marca:string;
    modelo:string;
    version:string;
    foto: string;

    //caracteristicas
    puertas: number;
    caballos: number;
    consumo: number;

    constructor(marca:string, modelo:string,foto:string, puertas:number, caballos: number, consumo:number,version?:string){
        this.id=-1;
        this.marca=marca;
        this.modelo=modelo;
        this.foto=foto;
        this.version=version;
        this.caballos=caballos;
        this.consumo=consumo;
        this.puertas=puertas;
    }    
}