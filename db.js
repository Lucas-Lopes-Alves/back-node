import mysql from "mysql2/promise.js"

const connection = mysql.createPool({
  host: "192.168.56.1",
  user: "acesso",
  password: "150322Em$",
  database: "app_db",
  port: "3306"
})

export default connection