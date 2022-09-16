import { check } from 'express-validator'
import resultadosValidacion from './resultadoValidacion'

const validacionTarea = [
    check('tarea')
        .notEmpty()
        .withMessage('poner una tarea es obligatoria')
        .isLength({min:2, max:50})
        .withMessage('El producto debe terner entre 2 y 50 caracteres'),
    (req,res,next)=>{
        resultadosValidacion(req,res,next)
    }
]

export default validacionTarea;