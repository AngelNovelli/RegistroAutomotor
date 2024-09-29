import { Vehiculo } from "./vehiculo";

export class RegistroAutomotor {
    private auto: Vehiculo[];
    private moto: Vehiculo[];
    private camion: Vehiculo[];

constructor(listaDeAutos?: Vehiculo[],listaDeMotos?: Vehiculo[], listaDeCamiones?: Vehiculo[]){

    if (listaDeAutos != undefined) {
        this.auto = listaDeAutos;
    } else {
        this.auto = [];
    }

    if (listaDeMotos != undefined) {
        this.moto = listaDeMotos;
    } else {
        this.moto = [];
    }

    if (listaDeCamiones != undefined) {
        this.camion = listaDeCamiones;
    } else {
        this.camion = [];
    }
}

    getAutos(): Vehiculo[] {
        return this.auto;
    }

    getMotos(): Vehiculo[] {
        return this.moto;
    }

    getCamion(): Vehiculo[] {
        return this.camion;
    }

    setAutos(nuevoAuto: Vehiculo[]): void {
        this.auto = nuevoAuto;
    }

    setMotos(nuevaMoto: Vehiculo[]): void {
        this.moto = nuevaMoto;
    }

    setCamiones(nuevoCamion: Vehiculo[]): void {
        this.camion = nuevoCamion;
    }

    agregarVehiculo(tipo: string, vehiculo: Vehiculo) {
        if (tipo === "Auto") {
            this.auto.push(vehiculo);
        }
        else if (tipo === "Moto") {
            this.moto.push(vehiculo);
        }
        else if (tipo === "Camion") {
            this.camion.push(vehiculo);
        }
        else {
            return "Ese tipo de vehiculo no está disponible a registrar."
        }
    }

    modificarVehiculo(tipo: string, vehiculo: Vehiculo, nuevoVehiculo: Vehiculo){
            if (tipo === "Auto") {
            const index = this.auto.indexOf(vehiculo);
            if (index !== -1) {
                this.auto[index] = nuevoVehiculo;
            }
        } else if (tipo === "Moto") {
            const index = this.moto.indexOf(vehiculo);
            if (index !== -1) {
                this.moto[index] = nuevoVehiculo;
            }
        } else if (tipo === "Camion") {
            const index = this.camion.indexOf(vehiculo);
            if (index !== -1) {
                this.camion[index] = nuevoVehiculo;
            }
        else {
            return "Ese tipo de vehiculo no está disponible a modificar."
        }
    }
}

    darBaja(tipo: string, vehiculo: Vehiculo){
        if (tipo === "Auto") {
            this.auto = this.auto.filter(auto => auto !== vehiculo);
        }
        else if (tipo === "Moto") {
            this.moto = this.moto.filter(moto => moto !== vehiculo);
        }
        else if (tipo === "Camion") {
            this.camion = this.camion.filter(camion => camion !== vehiculo)
        }
        else {
            return "No es posible dar de baja este tipo de vehículo."
        }
      
    }
}


