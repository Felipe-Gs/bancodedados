const client = require('../config/dbconfig');


module.exports = {
    async create(req, res){
        const query = {
            text: 'INSERT INTO cliente(nome, email, rg, rua, cidade, numrua) VALUES($1, $2, $3, $4, $5, $6)',
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
            text: 'SELECT * FROM cliente'
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
            text: 'UPDATE cliente SET nome = $1, email = $2, rg = $3, rua = $4, cidade = $5,  numrua = $6 WHERE codCliente = $7',
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
            text: 'DELETE FROM cliente WHERE codCliente = $1',
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