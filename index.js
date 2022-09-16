import express from "express"
import morgan from "morgan";
import path from "path"

const app = express();
app.set('port',process.env.PORT || 4000)

// quiero que mi backend escuche el puerto
app.listen(app.get('port'), () => {
    console.log(`Mi backend esta en el puerto ${app.get('port')}`);
})

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname,'public')));
