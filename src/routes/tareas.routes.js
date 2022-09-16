import {Router} from 'express';
import { borrarTarea, crearTarea, listarTareas } from '../controllers/tareas.controller';

const router = Router();

router
.route('/')
.get(listarTareas)
.post(crearTarea);

router
.route('/:id')
.delete(borrarTarea);

export default router;

