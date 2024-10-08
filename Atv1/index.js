import express, { response } from "express";

const app = express()

app.get('/cadastro/:nome/:sobrenome/:idade', async (req, res) => {
    const params = req.params

    const message = "<h1>Cadastro com sucesso!</h1>" +
        "<strong>Nome: " + params.nome + "</strong><br>" +
        "<strong>Sobrenome: " + params.sobrenome + "</strong><br>" +
        "<strong>Idade: " + params.idade + "</strong><br>"

    return res.send(message
    )
})

app.listen(8081, () => {
    console.log("Servidor ativo")
})