import mongoose, {Schema} from "mongoose";

const tareaSchema = new Schema ({
    tarea: {
        type: String,
        required: true,
        minlenght: 2,
        maxlenght: 50,
        unique: true
    }
});

const Tarea = mongoose.model('tarea',tareaSchema) //tiene que tener el nombre de lo que se va a guardar en la BD

export default Tarea