import dotenv from "dotenv"
import { Pool } from "pg"

dotenv.config({ override: true })

export const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    connectionTimeoutMillis: 5000,
    query_timeout: 5000
})
