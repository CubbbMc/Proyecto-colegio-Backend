import {uploadImage} from '../middlewares/resources.js';
import modelAlumnos from '../models/modelAlumnos.js';

const contStudent = {
    
    createStudent : async (req, res)=>{
        try {
            uploadImage (req, res, async (error)=>{
                if(error){
                    return res.json({
                        mensaje: 'Ocurrio un error cargando la imagen',
                        datos: error
                    });
                }
                const newStudent = new modelAlumnos({
                    Nombre:req.body.Nombre,
                    Apellido:req.body.Apellido,
                    Grado:req.body.Grado,
                    Edad:req.body.Edad,
                    Genero:req.body.Genero,
                    Foto:req.file.filename
                });
                const saveStudent = await newStudent.save();

                res.json ({
                    mensaje:'Estudiante creado satisfactoriamente',
                    datos: saveStudent
                });
            });
        } catch (error) {
              res.json ({
                    mensaje:'Ocurrio un error creando el Estudiante',
                    datos: error
                });
        }
    }

}
export default contStudent;