export class Proyectos {
    id? : number;
    periodo: string;
    nombre: string;
    descripcion: string;
    enlace: string;

    constructor(periodo: string, nombre: string, descripcion: string, enlace: string){
        this.periodo = periodo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }
}
