export class Vehiculo {
    private tipo: string;
    private marca: string;
    private modelo: string;
    private anio: number;

    constructor(tipo: string, marca: string, modelo: string, anio: number) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }

    getTipo(): string {
        return this.tipo;
    }

    getMarca(): string {
        return this.marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    getAnio(): number {
        return this.anio;
    }

    setTipo(nuevoTipo : string): void {
      this.tipo = nuevoTipo;
    }

    setMarca(nuevoMarca : string): void {
      this.marca = nuevoMarca;
    }

    setModelo(nuevoModelo : string): void {
      this.modelo = nuevoModelo;
    }

    setAño(nuevoAnio : number): void {
      this.anio = nuevoAnio;
    }
}