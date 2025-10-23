--Drop pre-existing table just incase
DROP TABLE IF EXISTS employees;

-- Create employees table
CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  birthday DATE NOT NULL,
  salary INTEGER NOT NULL
);
