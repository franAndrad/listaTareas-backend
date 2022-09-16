import Tarea from "../models/tarea";

export const crearTarea = async (req,res) =>{
    try {
        const tareaNueva = new Tarea(req.body);
        await tareaNueva.save();
        res.status(201).json({
            mensaje: 'El producto fue creado exitosamente'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: 'La tarea enviadaa no pudo ser creada'
        })
    }
}
export const listarTareas = async (req,res) =>{
    try {
        const listaTareas = await Tarea.find()
        res.status(200).json(listaTareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los tarea'
        })
    }
}
export const borrarTarea = async (req,res) =>{
    try {
        await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: 'La tarea fue eliminada correctamente'
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar borrar tarea'
        })
    }
}