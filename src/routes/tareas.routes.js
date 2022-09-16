import {Router} from 'express';
import { borrarTarea, crearTarea, listarTareas } from '../controllers/tareas.controller';
import validacionTarea from '../helpers/validacionTarea';

const router = Router();

router
.route('/')
.get(listarTareas)
.post(validacionTarea,crearTarea);

router
.route('/:id')
.delete(borrarTarea);

export default router;

