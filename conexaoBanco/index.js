require("dotenv").config(); 

const db = require("./db");

const port = process.env.PORT;

const express = require('express'); // O express é usado para que a gente possa manipular o backend

const app = express();

app.use(express.json());

// Criar a rota que vai enviar a requesição para a função reponsável pela inserção 
app.post("/client", async (req, res) => {
    await db.insertCustomer(req.body)

    res.sendStatus(401);  // Envia o sinal de que tudo deu certo
})

app.listen(port);

console.log("Backend Rodando!")