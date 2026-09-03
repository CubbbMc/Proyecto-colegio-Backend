import { Router } from "express";
import controllerLogin from "../controladores/controllerLogin.js";

const rutasLogin = Router();
rutasLogin.post('/', controllerLogin.login);
rutasLogin.get('/token/:token2', controllerLogin.validarToken);

export default rutasLogin;