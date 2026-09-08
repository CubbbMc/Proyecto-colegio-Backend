import contStudent from '../controladores/controladorAlumnos.js';
import { Router } from 'express';

const studentRoutes = Router();
studentRoutes.post('/', contStudent.createStudent);
studentRoutes.get('/:id', contStudent.readStudent);

export default studentRoutes;