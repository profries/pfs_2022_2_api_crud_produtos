const produtoPersistencia = require('../persistencia/produto_persistencia')

exports.listar = (req, res) => {
    produtoPersistencia.listar( (err, listaProdutos) => {
        if(err) { 
            return res.status(500).json({erro: err});
        }
        else {
            return res.json(listaProdutos);
        }  
    } );
}

exports.inserir = (req, res) => {
    const produto = req.body;
    produtoPersistencia.inserir(produto, (err, produtoInserido) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            return res.status(201).json(produtoInserido);
        }
    })
}

exports.buscarPorId = (req, res) => {
    const id = req.params.id;

    produtoPersistencia.buscarPorId(id, (err, produto) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(produto) 
                return res.json(produto);
            else {
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    })
}

exports.atualizar = (req, res) => {
    const produto = req.body;
    const id = req.params.id;

    produtoPersistencia.atualizar(id, produto, (err, produtoAtualizado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(produtoAtualizado) 
                return res.json(produtoAtualizado);
            else {
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    })
}

exports.deletar = (req, res) => {
    const id = req.params.id;

    produtoPersistencia.deletar(id, (err, produtoDeletado) => {
        if(err) {
            return res.status(500).json({erro: err});
        }
        else { 
            if(produtoDeletado) 
                return res.json(produtoDeletado);
            else {
                return res.status(404).json({erro:"Produto nao encontrado"});
            }
        }
    })
}
