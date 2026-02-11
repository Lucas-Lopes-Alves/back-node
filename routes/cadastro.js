import express from 'express'
import { appendFile } from 'fs'
import fileWrite from 'fs/promises'
import { stringify } from 'querystring'

const router = express.Router()

function cadastrar(req,res){
    const user = req.body
    res.status(202).json(user)
    console.log(JSON.stringify(user,null,4))
}

router.post("/cadastro", cadastrar)

router.get("/usuario", (req,res)=>{
    res.send(JSON.stringify(`{ "nome": lucas } `))
})

export default router