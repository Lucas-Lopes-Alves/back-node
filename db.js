import mysql from "mysql2/promises"

const connection = mysql.createPool({
  host: "192.168.56.1",
  user: "acesso",
  password: "150322Em$",
  port: "3306"
})

export default connection