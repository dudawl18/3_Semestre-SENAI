require("dotenv").config()  // Carrega as variáveis do arquivo env

const db = require("./Db")
const port=process.env.PORT  // Armazena o número da porta

const express = require("express")
const app = express()

app.get("/usuario", async (req,res)=> {
    const usuario = await db.selectCustomers()
    res.json(usuario)
    
})

app.get("/", (req,res)=> {
    res.json({
        message:"Funcionando!"
    })
})

app.listen(port)
console.log("Backend rodando")