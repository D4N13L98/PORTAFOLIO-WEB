import express from "express";
import { SendEmail } from "../controller/email.controller.js";

const EmailRouter = express.Router();

EmailRouter.post("/sendEmail", SendEmail);

export default EmailRouter;
