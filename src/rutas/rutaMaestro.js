import { Router } from "express";
import controllerMaestros from "../controladores/controller.js";

const rutaMaestros = Router();
rutaMaestros.post('/', controllerMaestros.createMaestro);
rutaMaestros.get('/:id',controllerMaestros.leerMaestrosPorId);
rutaMaestros.get('/', controllerMaestros.leerMaestros);
rutaMaestros.put('/:id',controllerMaestros.actualizarMaestro);
rutaMaestros.delete('/:id', controllerMaestros.eliminarMaestro);

export default rutaMaestros;