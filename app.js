import express from "express";
const app = express();
export default app;

// TODO: this file!
// Takes a JSON-formatted request and translates it into a JavaScript object
// allowing Express to read and use the request data
app.use(express.json());

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, something went wrong");
});
