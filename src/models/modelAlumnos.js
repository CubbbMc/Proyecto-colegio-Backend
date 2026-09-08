import { Schema, model } from 'mongoose';

const esquemaAlumno = new Schema({ 
    Nombre:{type:String, required:true, trim:true},
    Apellido:{type:String, required:false, trim:true},
    Grado:{type:Number, required:true, trim:true},
    Edad:{type:Number, required:true, trim:true},
    Genero:{type:String, required:true, trim:true},
    Foto:{type:String, required:true},
    
}, {
    timestamps:true
}); 
export default model('alumnos', esquemaAlumno);