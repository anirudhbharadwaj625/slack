import express from "express";
import "dotenv/config";
import { ENV } from "./config/env.js";
console.log("hi", ENV.PORT);
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from backend 123");
});

console.log("mongo_URI", ENV.MONGO_URI);
app.listen(ENV.PORT, () => {
  console.log("Server is running on port ", ENV.PORT);
});
