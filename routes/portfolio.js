import express from "express";
import { sendEmailController } from "../controllers/portfolio.js";

const portfolioRouter = express.Router();

portfolioRouter.post("/sendEmail", sendEmailController);

export default portfolioRouter;
