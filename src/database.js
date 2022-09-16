import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/listaTarea'; // base de dato local
// const url = process.env.SERVIDOR // base de dato en la nube

mongoose.connect(url);

const connection = mongoose.connection;

// cuando se establecio la coneccion quiero ejecutar
connection.once('open', () => {
    console.log('base de datos conectada');
})