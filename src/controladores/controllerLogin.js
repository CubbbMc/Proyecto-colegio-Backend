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
            if (validacionContraseña) {
                const token = await generarToken (
                    {
                    id : maestrosFound._id,
                    nombre : maestrosFound.nombre, 
                    materia : maestrosFound.materia, 
                    experiencia : maestrosFound.experiencia
                    });

                res.json({
                    
                    mensaje: `Bienvenido ${maestrosFound.nombre}`,
                    datos: token,
                });
            
            }
            else { res.json({mensaje:'Contraseña o Usuario Incorrecto', 
                datos : null,
            });
            }
        } catch (error) {
            res.json({
                mensaje:'Ocurrio un Error durante el Login',
                datos: error ,
            });
        }
    },

    validarToken: async (req, res) => {
        try {
            
            const token2 = req.params.token;
            const validar = await verificarToken(token2);

            if (validar && validacion.id) {
                res.json({
                    mensaje: 'Validación de token exitosa',
                    datos: validar,
                });
            } else {
                res.json({
                    mensaje: 'Token inválido',
                    datos: null,
                });
            }

        } catch (error) {
            res.json({
                    mensaje: 'Ocurrió un error validando el token',
                    datos: error,
                });
        }
    }
}

export default controllerLogin;

