"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaDeAutos, listaDeMotos, listaDeCamiones) {
        if (listaDeAutos != undefined) {
            this.auto = listaDeAutos;
        }
        else {
            this.auto = [];
        }
        if (listaDeMotos != undefined) {
            this.moto = listaDeMotos;
        }
        else {
            this.moto = [];
        }
        if (listaDeCamiones != undefined) {
            this.camion = listaDeCamiones;
        }
        else {
            this.camion = [];
        }
    }
    RegistroAutomotor.prototype.getAutos = function () {
        return this.auto;
    };
    RegistroAutomotor.prototype.getMotos = function () {
        return this.moto;
    };
    RegistroAutomotor.prototype.getCamion = function () {
        return this.camion;
    };
    RegistroAutomotor.prototype.setAutos = function (nuevoAuto) {
        this.auto = nuevoAuto;
    };
    RegistroAutomotor.prototype.setMotos = function (nuevaMoto) {
        this.moto = nuevaMoto;
    };
    RegistroAutomotor.prototype.setCamiones = function (nuevoCamion) {
        this.camion = nuevoCamion;
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (tipo, vehiculo) {
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
            return "Ese tipo de vehiculo no está disponible a registrar.";
        }
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (tipo, vehiculo, nuevoVehiculo) {
        if (tipo === "Auto") {
            var index = this.auto.indexOf(vehiculo);
            if (index !== -1) {
                this.auto[index] = nuevoVehiculo;
            }
        }
        else if (tipo === "Moto") {
            var index = this.moto.indexOf(vehiculo);
            if (index !== -1) {
                this.moto[index] = nuevoVehiculo;
            }
        }
        else if (tipo === "Camion") {
            var index = this.camion.indexOf(vehiculo);
            if (index !== -1) {
                this.camion[index] = nuevoVehiculo;
            }
            else {
                return "Ese tipo de vehiculo no está disponible a modificar.";
            }
        }
    };
    RegistroAutomotor.prototype.darBaja = function (tipo, vehiculo) {
        if (tipo === "Auto") {
            this.auto = this.auto.filter(function (auto) { return auto !== vehiculo; });
        }
        else if (tipo === "Moto") {
            this.moto = this.moto.filter(function (moto) { return moto !== vehiculo; });
        }
        else if (tipo === "Camion") {
            this.camion = this.camion.filter(function (camion) { return camion !== vehiculo; });
        }
        else {
            return "No es posible dar de baja este tipo de vehículo.";
        }
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
