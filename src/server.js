import express from 'express';
import morgan from 'morgan';
import rutaMaestros  from './rutas/rutaMaestro.js';
import rutasLogin from './rutas/rutaLogin.js';

const app = express();
app.use(morgan('con'));
app.use(express.json());
app.use('/maestros', rutaMaestros);
app.use('/login', rutasLogin);
app.get('/',(req,res) => {

    res.status(404).send("Not Found");

});

export default app;