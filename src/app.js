import express from "express"
import bodyParser from "body-parser"
import morgan from 'morgan';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send(`Hello !`);
});

export default app;