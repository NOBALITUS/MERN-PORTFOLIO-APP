import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import portfolioRouter from "./routes/portfolio.js";
import exp from "constants";

// configuring the dotenv
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.use("/api/v1/portfolio", portfolioRouter);

//routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const port = process.env.PORT || 8080;

//listen
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
