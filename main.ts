import { Vehiculo } from "./vehiculo";
import { RegistroAutomotor } from "./automotor";
 

const registroAutomotor = new RegistroAutomotor();

// Crear vehiculos
const auto = new Vehiculo("Auto","Ford","Mustang", 2024);
const moto = new Vehiculo("Moto","Kawasaki","Vulcan", 2021);
const camion = new Vehiculo("Camion","Iveco","Eurotech", 2020);

registroAutomotor.agregarVehiculo("Auto", auto);
registroAutomotor.agregarVehiculo("Moto", moto);
registroAutomotor.agregarVehiculo("Camion", camion);
console.log("Auto registrado:", registroAutomotor.getAutos());
console.log("Moto registrada:", registroAutomotor.getMotos() );
console.log("Camion registrado:", registroAutomotor.getCamion() );

const nuevoAuto = new Vehiculo("Auto", "Peugeot", "206", 2007);
registroAutomotor.modificarVehiculo("Auto", auto, nuevoAuto);
console.log("Auto modificado:", registroAutomotor.getAutos());

registroAutomotor.darBaja("Auto", nuevoAuto);
 registroAutomotor.darBaja("Moto", moto);
 registroAutomotor.darBaja("Camion", camion);
 console.log("Autos dado de baja:", registroAutomotor.getAutos());
 console.log("Motos dado de baja:", registroAutomotor.getMotos());
 console.log("Camion dado de baja:", registroAutomotor.getCamion());