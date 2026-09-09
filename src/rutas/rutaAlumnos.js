import contStudent from '../controladores/controladorAlumnos.js';
import { Router } from 'express';
import {uploadImage} from '../middlewares/resources.js';

const studentRoutes = Router();
studentRoutes.post('/', contStudent.createStudent);
studentRoutes.get('/:id', contStudent.readStudent);
studentRoutes.put('/:id', uploadImage, contStudent.updateStudent);

export default studentRoutes;