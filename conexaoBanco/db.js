// const { Pool } = require("pg");

async function connect() {  
    const { Pool } = require("pg");

    if(global.connection)
        return global.connection.connect();

    const pool = new Pool({
      user: process.env.USER_NAME,
      host: process.env.HOST_NAME,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      dialect: process.env.DB_DIALECT,
      port: process.env.PORT_NUMBER
    });
    
    const client = await pool.connect();
    console.log("O Pool de conexão foi criado com sucesso!")
    client.release();

    global.connection = pool;
    
    return pool.connect();
  }

  connect();

  // Criar a função que vai fazer a inserção de dados no banco Função para inserir clientes
  async function insertCustomer(customer) { 
    // Estabelecer a conexão com o banco de dados
    const client = await connect();

    // Comando/query que vai ser usado na operação de inserção de informações no banco de dados
    let sql = "INSERT INTO client(cpf, nome, email, idade, profissao) VALUES ($1, $2, $3, $4, $5;)";

    // Passar os dados que estão chegando em customer
    let values = [customer.cpf, customer.nome, customer.email, customer.idade, customer.profissao];

    // Enviar os tais dados para o banco
    client.query(sql, values);

  
  };

  // Exportar funções
  module.exports = {
    insertCustomer
  }