import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to home page !");
});
app.get("/test", (reques, response) => {
  response.send("working api");
});
export default app;