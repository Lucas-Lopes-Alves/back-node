import express from 'express'

const router = express.Router()

router.post("/cadastro", (req,res)=>{
    const user = req.body
    res.status(201).json(user)
})

// __dirname = "C:\Users\LUCASLOPESALVESDESOU\Desktop\back"

router.get("/usuario", (req,res)=>{
    res.send(JSON.stringify(`{ "nome": lucas } `))
})

export default router