import express, { Router } from "express"
import morgan from "morgan";
import cors from "cors"
import path from "path"
import "./src/database.js"
import router from "./src/routes/tareas.routes.js";

const app = express();

app.set('port',process.env.PORT || 4000);

// quiero que mi backend escuche el puerto
app.listen(app.get('port'), () => {
    console.log(`Estamos en el puerto ${app.get('port')}`);
});

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

// rutas
app.use('/apitareas', router);