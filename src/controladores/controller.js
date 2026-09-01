import modelMaestros from "../models/modelMaestros.js";
import bcrypt from "bcryptjs";

const controllerMaestros = {
createMaestro: async (req, res) => {
try{
    const {nombre, materia, experiencia, correo, contraseña} = req.body;
    const contraseñaProtegida = await bcrypt.hash (contraseña, 10);
    const nuevoMaestro = new modelMaestros ({nombre, materia, experiencia, correo, contraseña:contraseñaProtegida });

    const guardarMaestro = await nuevoMaestro.save();
    if(guardarMaestro._id){
        res.json({
            mensaje: "Maestro Guardado",
            datos: guardarMaestro._id

        });
        
    }
    
}
catch(error){
    res.json({
        mensaje: "Maestro No Guardado",
        datos: error
    });
}


} 

}
export default controllerMaestros;