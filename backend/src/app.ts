import express from "express";
import cors from "cors";
import dashboardRouter from "./routes/dashboards"
import statesRouter from "./routes/states"
import { errorHandling } from "./middlewares/error-handling";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", statesRouter)
app.use("/api", dashboardRouter)

app.use(errorHandling);

export { app };
