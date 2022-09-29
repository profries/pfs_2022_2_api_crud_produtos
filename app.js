const express = require('express')
const app = express();
const porta = 3000;
const produtoRota = require('./rotas/produto_rotas')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/produtos', produtoRota);

app.listen(porta, () => {
    console.log(`API executando na porta ${porta}`)
})