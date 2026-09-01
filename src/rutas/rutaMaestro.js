import { Router } from "express";
import controllerMaestros from "../controladores/controller.js";

const rutaMaestros = Router();
rutaMaestros.post('/', controllerMaestros.createMaestro);

export default rutaMaestros;