import express from 'express'
import connection from '../db.js'

const router = express.Router()

function cadastrar(req,res){
    const user = req.body
    connection.query("INSERT INTO usuarios(nome) VALUES(?)", [req.body.nome])
    res.status(201).json(user)
    console.log(JSON.stringify(user,null,4))
}

router.post("/cadastro", cadastrar)

router.get("/usuario", (req,res)=>{
    res.json({ "nome": lucas })
})

export default router