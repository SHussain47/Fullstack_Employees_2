// Create a reusable DB connection so client/app can talk to PostgreSQL
// Without having to recreate the connection everywhere
// Just import 'db' when you need to query the DB

import pg from "pg";
const db = new pg.Client(process.env.DATABASE_URL);
export default db;
