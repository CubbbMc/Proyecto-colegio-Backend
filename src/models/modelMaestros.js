import { Schema, model } from "mongoose";

const esquemaMaestro = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    materia: {
        type: String,
        required: true,
        trim: true
    },
    experiencia: {
        type: Number,
        required: true,
        trim: true
    },
    correo: {
        type: String,
        required: true,
        trim: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,8}$/, "email invalido"]
    },
    contraseña: {
        type: String,
        required: true,
        match: [/^(?=.*[a-zA-Z0-9!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`])\S+$/, 'password invalido']
    },
});
export default model('maestro', esquemaMaestro);