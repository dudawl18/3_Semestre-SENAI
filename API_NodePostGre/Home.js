require("dotenv").config()  // Carrega as variáveis do arquivo env

const port=process.env.PORT  // Armazena o número

const express = require("express")
const app = express()

app.get("/", (req,res)=> {
    res.json({
        message:"Funcionando!"
    })
})

app.listen(port)
console.log("Backend rodando")