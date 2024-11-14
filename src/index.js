import express from "express"
import bodyParser from "body-parser"
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const data = req.body;
    res.send(`Hello !`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});