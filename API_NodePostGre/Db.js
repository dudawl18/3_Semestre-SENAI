async function connect() {
    if (global.connection)
        return global.connection.connect()

    const { Pool } = require("pg") // estratégia de conexão
    const pool = new Pool({    // Declarando a variável
        connectionString: process.env.CONNECTION_STRING
    })
    // await: a conexão pode levar um tempo e quero ir pra linha de baixo somente depois que foi ativada    
    const client = await pool.connect() // Estabelecer de fato a conexão entre programa 
    console.log("Criou o Pool de conexão")

    const res = await client.query("select now()") // Comando para o banco para 
    console.log(res.rows[0])
    client.release()

    global.connection = pool
    return pool.connect()
}
  connect()

//  Listagem de usuários
async function selectCustomers() {  // Ira selecionar os clientes do banco de dados
    const client = await connect
    const res = await client.query("SELECT * FROM usuario")
    return res.rows
}

module.exports = (
    selectCustomers
)

