import express from "express";
import cors from "cors";
import EmailRouter from '../routes/email.routes.js'

const app = express();

app.use(express.json());
app.use(cors());

//parsear x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use("/portafolio", EmailRouter);

export default app;