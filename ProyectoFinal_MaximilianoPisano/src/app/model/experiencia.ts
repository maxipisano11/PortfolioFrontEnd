export class Experiencia {
    id? : number;
    periodoEx: string;
    nombreEx: string;
    descripcionEx: string;

    constructor(periodoEx: string, nombreEx: string, descripcionEx: string){
        this.periodoEx = periodoEx;
        this.nombreEx = nombreEx;
        this.descripcionEx = descripcionEx;
    }
}
