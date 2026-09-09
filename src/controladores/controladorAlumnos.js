import { request } from 'express';
import {uploadImage} from '../middlewares/resources.js';
import modelAlumnos from '../models/modelAlumnos.js';
import fs from 'fs';
import path from 'path';

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
    },
    readStudent: async(req, res)=>{
        try {
            const studentFound = await modelAlumnos.findById(req.params.id);
            if(studentFound._id){
                res.json({
                    mensaje:'Estudiante encontrado satisfactoriamente',
                    datos: studentFound,
                });
            }
        } catch (error) {
            res.json({
               mensaje:'Ocurrio un error encontrando el Estudiante',
                datos: error, 
            });
        }
    },
    updateStudent: async (req, res) => {
        try {
            const fotoUpdate = await modelAlumnos.findById(
                req.params.id
            );
            if (!fotoUpdate) {
                if (req.file){
                    fs.unlinkSync(req.file.path);
                }
                res.json({
                    mensaje: 'Estudiante no encontrado',
                    datos: null,
                });
            }  
            if (req.file){
                if (fotoUpdate.Foto) {
                    const actualizarImagen = path.join('imagenes', fotoUpdate.Foto);
                    if (fs.existsSync(actualizarImagen)) {
                        fs.unlinkSync(actualizarImagen);
                    }
                }
            }
            const nuevoModeloEstudiante = {
                Nombre: req.body.Nombre,
                Apellido: req.body.Apellido,
                Grado: req.body.Grado,
                Edad: req.body.Edad,
                Genero: req.body.Genero,
                Foto: req.file ? req.file.filename : fotoUpdate.Foto,
            };

            const studentUpdate = await modelAlumnos.findByIdAndUpdate(
                req.params.id, nuevoModeloEstudiante, {
                new: true
            });
            return res.json({
                mensaje: 'Estudiante actualizado',
                datos: studentUpdate,
            });
            
        } catch (error) {
            res.json({
                mensaje: 'Error al actualizar el estudiante',
                datos: error,
            });
            
            
        }
    },
    deleteStudent: async(req, res) => {
       try {
        const studentToDelete = await modelAlumnos.findByIdAndDelete(
            req.params.id
        );

        if(!studentToDelete){
            res.json({
                mensaje: "Estudiante no encontrado para eliminar.",
                datos: error,
            })
        }

        if(studentToDelete.Foto){
            const rutaFoto = path.join('imagenes', studentToDelete.Foto);

            if(fs.existsSync(rutaFoto)){
                fs.unlinkSync(rutaFoto);
            }
        }

        res.json({
            mensaje: "Estudiante eliminado correctamente.",
            datos: null,
        });

       } catch (error) {
            res.json({
                mensaje: "Error al eliminar el estudiante.",
                datos: error,
            });
       } 
    }

}
export default contStudent;