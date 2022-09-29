const { Client } = require('pg');

const conexao = {
    user: 'postgres',
    password: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    database: 'api_crud_produtos'
}

exports.listar = (callback) => {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "SELECT * FROM PRODUTOS";
    cliente.query(sql, (err, result) => {
        if(err) {
            callback(err, undefined);
        }
        else {
            callback(undefined, result.rows);
        }
        cliente.end();
    })
}

exports.inserir = (produto, callback) => {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO produtos(nome,preco) VALUES ($1, $2) RETURNING *"
    const values = [produto.nome, produto.preco];

    cliente.query(sql, values, (err, result) => {
        if(err) {
            callback(err, undefined);
        }
        else {
            callback(undefined, result.rows[0]);
        }
        cliente.end();
    })
}

exports.buscarPorId = (id, callback) => {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM produtos WHERE id=$1"
    const values = [id];

    cliente.query(sql, values, (err, result) => {
        if(err) {
            callback(err, undefined);
        }
        else {
            callback(undefined, result.rows[0]);
        }
        cliente.end();
    })
}

exports.atualizar = (id, produto, callback) => {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "UPDATE produtos SET nome=$1, preco=$2 WHERE id=$3 RETURNING *"
    const values = [produto.nome, produto.preco, id];

    cliente.query(sql, values, (err, result) => {
        if(err) {
            callback(err, undefined);
        }
        else {
            callback(undefined, result.rows[0]);
        }
        cliente.end();
    })
}

exports.deletar = (id, callback) => {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "DELETE FROM produtos WHERE id=$1 RETURNING *"
    const values = [id];

    cliente.query(sql, values, (err, result) => {
        if(err) {
            callback(err, undefined);
        }
        else {
            callback(undefined, result.rows[0]);
        }
        cliente.end();
    })
}

