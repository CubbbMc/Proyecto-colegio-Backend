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
},

leerMaestros: async(req, res) => {
    try {
        const maestros = await modelMaestros.find();
        res.json({
            mensaje: "Lista de maestros encontrados",
            datos:maestros,
        })
    } catch (error) {
        res.json({
            mensaje: "Lista de maestros no encontrada",
            datos: error,
        });
    }
},

actualizarMaestro: async (req, res) =>{
    try {
        const teacherUpdate = await modelMaestros.findByIdAndUpdate(req.params.id, req.body);
        if(teacherUpdate._id){
            res.json({
                mensaje: "Maestro actualizado correctamente",
                datos:teacherUpdate
            })
        }
    } catch (error) {
        res.json({
            mensaje: "Error al actualizar el maestro",
            datos: error,
        });
    }
},

eliminarMaestro: async (req, res) =>{
    try { const eliminar = await modelMaestros.findByIdAndDelete(req.params.id);
        if (eliminar._id){
            res.json({
                mensaje:"maestro Eliminado",
                datos:  null
            });
        }
} catch (error){
    res.json({
                mensaje:"no se pudo eliminar maestro",
                datos:  error
            });
}
}
};

export default controllerMaestros;