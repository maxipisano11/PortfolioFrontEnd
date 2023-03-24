export class Educacion {
    id? : number;
    periodoEdu: string;
    nombreEdu: string;
    descripcionEdu: string;

    constructor(periodoEdu: string, nombreEdu: string, descripcionEdu: string){
        this.periodoEdu = periodoEdu;
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
    }
}
