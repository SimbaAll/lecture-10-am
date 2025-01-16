import mysql2 from "mysql2";

const dbConnection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
})

export default dbConnection