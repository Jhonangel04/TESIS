import express from "express";12
import bodyParser from "body-parser";12
import morgan from 'morgan';

import authRoutes from "./routes/auth.router.js";

const app = express();

app.use(morgan('dev'));

app.use('/api', authRoutes);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());


app.get('/', (req, res) => {
    res.send(`Hello !`);
});

export default app;