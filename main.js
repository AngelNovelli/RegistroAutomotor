"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vehiculo_1 = require("./vehiculo");
var automotor_1 = require("./automotor");
var registroAutomotor = new automotor_1.RegistroAutomotor();
// Crear vehiculos
var auto = new vehiculo_1.Vehiculo("Auto", "Ford", "Mustang", 2024);
var moto = new vehiculo_1.Vehiculo("Moto", "Kawasaki", "Vulcan", 2021);
var camion = new vehiculo_1.Vehiculo("Camion", "Iveco", "Eurotech", 2020);
registroAutomotor.agregarVehiculo("Auto", auto);
registroAutomotor.agregarVehiculo("Moto", moto);
registroAutomotor.agregarVehiculo("Camion", camion);
console.log("Auto registrado:", registroAutomotor.getAutos());
console.log("Moto registrada:", registroAutomotor.getMotos());
console.log("Camion registrado:", registroAutomotor.getCamion());
var nuevoAuto = new vehiculo_1.Vehiculo("Auto", "Peugeot", "206", 2007);
registroAutomotor.modificarVehiculo("Auto", auto, nuevoAuto);
console.log("Auto modificado:", registroAutomotor.getAutos());
registroAutomotor.darBaja("Auto", nuevoAuto);
registroAutomotor.darBaja("Moto", moto);
registroAutomotor.darBaja("Camion", camion);
console.log("Autos dado de baja:", registroAutomotor.getAutos());
console.log("Motos dado de baja:", registroAutomotor.getMotos());
console.log("Camion dado de baja:", registroAutomotor.getCamion());