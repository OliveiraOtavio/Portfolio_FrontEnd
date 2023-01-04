
export class Educacion {

    id: number;
    nombreE: string;
    descripcionE: string;
    conclusionE: string;

    constructor (nombreE: string, descripcionE: string, conclusionE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.conclusionE = conclusionE;
    }
}
