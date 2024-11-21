import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

import authRoutes from "./routes/auth.router.js";

app.use(morgan("dev"));

app.use("/api", authRoutes);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello !`);
});

export default app;
