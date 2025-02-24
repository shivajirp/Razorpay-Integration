import express from "express";
import payment from "./routes/product.routes.js";

const app = express();

app.use("/api/v1", payment)

export default app;
