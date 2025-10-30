import express from "express";
const app = express();

import employeeRouter from "#api/employees";

// TODO: this file!
// Takes a JSON-formatted request and translates it into a JavaScript object
// allowing Express to read and use the request data
app.use(express.json());

app.use("/", employeeRouter);

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, something went wrong");
});

export default app;