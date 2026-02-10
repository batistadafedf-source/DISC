// Importando dependências (CADA UMA APARECE APENAS UMA VEZ)
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Importação correta


// Criar a aplicação Express (DEVE VIR ANTES DE DEFINIR AS ROTAS)
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors()); // Habilitar CORS para permitir requisições do frontend

// Configuração do banco de dados (MariaDB)
const db = mysql.createPool({
    host: 'mariadb',  // Nome do serviço no Docker Compose
    user: 'root',
    password: 'senha123',
    database: 'disc_database',
    port: 3306
});

// Testar conexão com o banco ao iniciar o backend
db.getConnection()
    .then(() => console.log("✅ Conectado ao MariaDB!"))
    .catch(err => console.error("❌ Erro ao conectar ao banco:", err));

// Rota para obter todas as avaliações
app.get('/avaliacoes', async (req, res) => {
    try {
        const [result] = await db.execute('SELECT * FROM avaliacoes');
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para armazenar uma nova avaliação DISC
app.post('/avaliacoes', async (req, res) => {
    const { usuario_id, respostas } = req.body;
    
    if (!usuario_id || !respostas) {
        return res.status(400).json({ error: "Dados inválidos" });
    }

    try {
        const [result] = await db.execute(
            'INSERT INTO avaliacoes (usuario_id, respostas, data) VALUES (?, ?, NOW())',
            [usuario_id, JSON.stringify(respostas)]
        );
        res.status(201).json({ message: 'Avaliação registrada', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
