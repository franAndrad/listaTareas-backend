import {Router} from 'express';
import { borrarProducto, crearProducto, listarProductos } from '../controllers/tareas.controller';

const router = Router();

router
.route('/')
.get(listarProductos)
.post(crearProducto);

router
.route('/:id')
.delete(borrarProducto);

export default router;

