import express from 'express'
import Router from "./routes/public.js"
const app = express()
app.use(express.json())

app.use('/',Router)

app.listen(5000, ()=>{
    console.log("Servidor tá no trinques🚀")
})
