import pg from 'pg'
import './dotenv.js'
const connectionString = "postgresql://postgres:oaElzrbXRmeUBARIUFKEVbDDUKiGDCQp@monorail.proxy.rlwy.net:22082/railway"
const config ={
    user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        database: process.env.PGDATABASE,
        connectionString
}

export const pool = new pg.Pool(config)
