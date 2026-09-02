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
            datos: guardarMaestro

        });
        
    }
    
}
catch(error){
    console.log(error);
    res.json({
        mensaje: "Maestro No Guardado",
        datos: error
    });
}


},

leerMaestrosPorId: async(req,res)=>{
    try {
        const maestroEncontrado = await modelMaestros.findById(req.params.id);
        if(maestroEncontrado._id){
            res.json({
            mensaje: "Maestro encontrado",
            datos: maestroEncontrado,
        });
        }

    } catch (error) {
        res.json({
        mensaje: "Maestro No  encontrado",
        datos: error,
    });
        
    }
}

}
export default controllerMaestros;