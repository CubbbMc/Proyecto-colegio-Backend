import express from 'express';
import morgan from 'morgan';
import rutaMaestros  from './rutas/rutaMaestro.js';

const app = express();
app.use(morgan('con'));
app.use(express.json());
app.use('/maestros', rutaMaestros);
app.get('/',(req,res) => {

    res.status(404).send("Not Found");

});

export default app;