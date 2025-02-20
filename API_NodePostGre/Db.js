async function connect() {
    const {Pool} = require("pg") // estratégia de conexão
    const pool = new Pool ({    // Declarando a variável
    connectionString: process.env.CONNECTION_STRING
    })     
    const client = await pool.connect() // Retornar 
    console.log("Criou o Pool de conexão")
}