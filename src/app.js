import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to home page !");
});
app.get("/about", (reques, response) => {
  response.send("Welcome to About Page.");
});
export default app;