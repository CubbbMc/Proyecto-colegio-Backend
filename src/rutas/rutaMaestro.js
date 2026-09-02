import { Router } from "express";
import controllerMaestros from "../controladores/controller.js";

const rutaMaestros = Router();
rutaMaestros.post('/', controllerMaestros.createMaestro);
rutaMaestros.get('/:id',controllerMaestros.leerMaestrosPorId);


export default rutaMaestros;