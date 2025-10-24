import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO

  const employees = [
    {
      name: "Alice Johnson",
      birthday: "1990-01-15",
      salary: 50000,
    },
    {
      name: "Bob Smith",
      birthday: "1985-05-22",
      salary: 60000,
    },
    {
      name: "Carolyn Brown",
      birthday: "1992-09-30",
      salary: 55000,
    },
    {
      name: "David Wilson",
      birthday: "1988-12-12",
      salary: 62000,
    },
    {
      name: "Eva Martinez",
      birthday: "1995-03-05",
      salary: 48000,
    },
    {
      name: "Frank Thomas",
      birthday: "1982-07-19",
      salary: 70000,
    },
    {
      name: "Grace Lee",
      birthday: "1991-11-23",
      salary: 53000,
    },
    {
      name: "Henry King",
      birthday: "1987-06-14",
      salary: 59000,
    },
    {
      name: "Isabella Moore",
      birthday: "1993-08-08",
      salary: 51000,
    },
    {
      name: "Jack Davis",
      birthday: "1989-04-17",
      salary: 64000,
    },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
