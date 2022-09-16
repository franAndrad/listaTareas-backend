import mongoose, {Scheme} from "mongoose";

const tareaSchema = new Scheme ({
    tarea: {
        type: String,
        required: true,
        minlenght: 2,
        maxlenght: 50
    }
})

const Tarea = mongoose.model('tarea',tareaSchema) //tiene que tener el nombre de lo que se va a guardar en la BD

export default Tarea