import db from "#db/client";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  // TODO
  try {
    const sql = `
      INSERT INTO employees (name, birthday, salary)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, birthday, salary];
    const { rows } = await db.query(sql, values);
    console.log("New Employee Added", rows[0]);
    return rows[0];
  } catch (error) {
    console.error("Error with createEmployee function: ", error);
    throw error;
  }
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
  try {
    const sql = `
      SELECT * FROM employees
    `;
    // 1. Returns promise form DB | 2. Destrucures objects and takes rows
    // 3. { rows: employees } renames rows to employees
    const { rows: employees } = await db.query(sql);
    return employees;
  } catch (error) {
    console.error("Error with getEmployees function: ", error);
    throw error;
  }
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
