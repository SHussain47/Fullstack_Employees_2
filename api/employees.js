import express from "express";
const employeeRouter = express.Router();
export default employeeRouter;

import { getEmployees } from "#db/queries/employees";

// TODO: this file!
employeeRouter.route("/").get(async (req, res) => {
  const employees = await getEmployees();
  res.send(employees);
});
