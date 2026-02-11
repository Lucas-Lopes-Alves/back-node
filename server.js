import express from 'express'
const app = express()
const router = express.Router()
app.use(express.json())
router.post('/caminho', (res,req)=>{
    const user = req.body
    res.send().status(201).json(user)
})

app.use('/',router)

app.listen(5000, (res,req)=>{
    console.log("Servidor tá no trinques")
})