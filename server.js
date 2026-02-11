import express from 'express'
import 'dotenv/config'
// import Public from "./public/public.js"

const router = express.Router()

function teste(req,res){
    const user = req.body
    res.status(201).json(user)
}

router.post("/cadastro", teste)

const app = express()
app.use(express.json())

app.use("/", router)

app.listen(5000, ()=>{console.log("server tá funcionando")})

// lucas
// LF8735UIRvdqJw6y