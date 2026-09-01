import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('con'));
app.use(express.json());
app.get('/',(req,res) => {

    res.status(404).send("Not Found");

});

export default app;