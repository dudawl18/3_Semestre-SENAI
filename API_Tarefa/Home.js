
const bodyParser = require("body-parser");
const express = require("express"); // requerer / chamar o express

// inicializar o App
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tarefas = [
    { id: 1, descricao: "Estudar NodeJS" },
    { id: 2, descricao: "Criar API com Express" }
];

app.get('/tarefas', (req, res) => {
    res.json(tarefas)
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});

// Rota para criar uma nova tarefa 
app.post('/tarefas', (req, res) => {
    const { descricao } = req.body


    if (!descricao) {
        return res.status(400).json({ error: 'Descrição é obrigatória!!' })
    }

    const novaTarefa = {
        id: tarefas.length = 1, // Contagem dos elementos do array
        decricao: descricao
    };

    tarefas.push(novaTarefa);  // Adiciona a nova tarefa à lista de tarefas
    res.status(201).json(novaTarefa)  // Mensagem 201 quer dizer que deu certo
});

// Edição de uma tarefa existente
app.put('/tarefas', (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body

    const tarefaIndex = tarefas.find(tarefa => tarefas.id === parseInt(id))  // Encontra o índice da tarefa na lista de tarefas

    if (!tarefas) {
        return res.status(404).json({ error: 'Tarefa não encontrada! ' });
    } else {
        tarefas.descricao = descricao;
        res.json(tarefas)
    }
});

app.delete('/tarefas', (req, res) => {
    const { id } = req.params;
    const index = tarefas.findIndex(tarefas => tarefas.id === parseInt);

    if (index !== -1) { // Faz a checagem se a tarefa foi encontrada
        tarefas.splice(index,1); // Remove a tarefa escolhida
        res.status(204).json({ mensagem: 'Exclusão realizada com sucesso!'}); // Retorna a mensagem para o usuario
    } else {
        return res.status(404).json({ error: 'Tarefa não encontrada! ' })
    }
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});