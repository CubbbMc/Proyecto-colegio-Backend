import modelMaestros from "../models/modelMaestros.js";
import { generarToken,verificarToken } from "../ayudas/funciones.js";
import bcrypt  from "bcryptjs";

const controllerLogin = {
    login: async(req, res)=>{
        try {
            const{username, contraseña}=req.body;
            const maestrosFound = await modelMaestros.findOne({
                correo:username,
            });
            const validacionContraseña = await bcrypt.compare(contraseña, maestrosFound.contraseña);

            
        } catch (error) {
            
        }
    }
}

