const client = require('../config/dbconfig');


module.exports = {
    async create(req, res){
        const query = {
            text: 'INSERT INTO funcionario(tipofuncionario, nome, login, senha) VALUES($1, $2, $3, $4)',
            values: Object.keys(req.body).map(i=>req.body[i])
        };

        client
        .query(query)
        .then(() => {return res.status(200)})
        .catch(e => {
            console.error(e.stack);
            return res.status(400).json(e.stack);
        });
    },

    async read(req, res){
        const query = {
            text: 'SELECT * FROM funcionario'
        };
        client
        .query(query)
        .then(data => {
            return res.json(data.rows);
        })
        .catch(e => {
            console.error(e.stack);
            return res.status(400).json(e.stack);
        });
    },

    async update(req, res){
        const { id } = req.params;
        let query = {
            text: 'UPDATE funcionario SET tipofuncionario = $1, nome = $2, login = $3, senha = $4, WHERE codFuncionario = $5',
            values: Object.keys(req.body).map(i=>req.body[i])
        };
        query.values.push(id);
        
        client
        .query(query)
        .then(() => {
            return res.status(200);
        })
        .catch(e => {
            console.error(e.stack);
            return res.status(400).json(e.stack);
        });
    },

    async delete(req, res){
        const { id } = req.params;
        const query = {
            text: 'DELETE FROM funcionario WHERE codFuncionario = $1',
            values: [id]
        };
       
        client
        .query(query)
        .then(() => {
            return res.status(200);
        })
        .catch(e => {
            console.error(e.stack);
            return res.status(400).json(e.stack);
        });
    },
   
}