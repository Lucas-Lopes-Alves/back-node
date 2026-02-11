import express from 'express'
import Router from "./routes/cadastro.js"
import cors from 'cors'
import { MongoClient, ServerApiVersion } from 'mongodb'
const app = express()
app.use(express.json())
app.use(cors())

app.use('/',Router)

app.listen(5000, ()=>{
    console.log("Servidor tá no trinques🚀")
})
