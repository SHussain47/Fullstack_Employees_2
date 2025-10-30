import express from "express";
const employeeRouter = express.Router();
export default employeeRouter;

import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

// TODO: this file!

employeeRouter.get("/", (req, res) => {
  res.status(200).send("Welcome to the Fullstack Employees API.");
});

employeeRouter.get("/employees", async (req, res, next) => {
  try {
    const employees = await getEmployees();
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error /GET getting employees: ", error);
    next(error);
  }
});

employeeRouter.get("/employees/:id", async (req, res, next) => {
  try {
    const employeeId = req.params.id;
    const employee = await getEmployee(employeeId);
    res.status(200).json(employee);
  } catch (error) {
    console.error("Error /GET getting employee with ID: ", error);
    next(error);
  }
});

employeeRouter.post("/employees", async (req, res, next) => {
  try {
    const { name, birthday, salary } = req.body || {};

    if (!name || !birthday || !salary) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newEmployee = await createEmployee({ name, birthday, salary });
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error("Error /POST creating employee: ", error);
    next(error);
  }
});

employeeRouter.put("/employees/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeId = Number(id);
    if (!Number.isInteger(employeeId) || employeeId < 0 || employeeId.toString() !== id) {
      return res.status(400).json({ error: "ID must be a positive number" });
    }

    const { name, birthday, salary } = req.body || {};
    if (!name || !birthday || !salary) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const employee = await getEmployee(employeeId);
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const updatedEmployee = await updateEmployee({
      id: employeeId,
      name,
      birthday,
      salary,
    });

    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error("Error /PUT update employee: ", error);
    next(error);
  }
});

employeeRouter.delete("/employees/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 0) {
      return res.status(400).json({ error: "ID must be a positive integer" });
    }

    const deletedEmployee = await deleteEmployee(id);

    if (!deletedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error /DELETE delete employee: ", error);
    next(error);
  }
});
