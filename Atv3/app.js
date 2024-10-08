const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
require('./models/banco');
const post = require('./models/post');

// Define o helper ifCond
const hbs = engine({
    defaultLayout: 'main',
    helpers: {
        ifCond: function (v1, operator, v2, options) {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                case '!=':
                    return (v1 != v2) ? options.fn(this) : options.inverse(this);
                default:
                    return options.inverse(this);
            }
        }
    }
});

app.engine('handlebars', hbs);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para a página inicial (Cadastro)
app.get("/", (req, res) => {
    res.render('home');
});

// Rota para consultar os agendamentos
app.get("/consulta", (req, res) => {
    post.Agendamentos.findAll()
        .then((posts) => {
            const postsData = posts.map(post => post.dataValues);
            res.render('consulta', { posts: postsData });
        })
        .catch((error) => {
            console.error('Não foi possível buscar os dados', error);
            res.status(500).send("Erro no servidor");
        });
});

// Rota para editar um agendamento
app.get("/editar/:id", (req, res) => {
    post.Agendamentos.findOne({ where: { id: req.params.id } })
        .then((post) => {
            if (post) {
                console.log("Dados do post:", post.dataValues);
                res.render("editar", { post: post.dataValues });
            } else {
                res.status(404).send("Registro não encontrado");
            }
        })
        .catch((error) => {
            console.error('Não foi possível buscar os dados', error);
            res.status(500).send("Erro no servidor");
        });
});

// Rota para atualizar um agendamento
app.post("/editar-usuario/:id", (req, res) => {
    post.Agendamentos.update(req.body, { where: { id: req.params.id } })
        .then(() => {
            res.redirect('/consulta');
        })
        .catch((error) => {
            console.error('Não foi possível atualizar o registro', error);
            res.status(500).send("Erro no servidor");
        });
});


// Rota para excluir um agendamento
app.get("/excluir/:id", (req, res) => {
    post.Agendamentos.destroy({ where: { id: req.params.id } })
        .then(() => {
            res.redirect('/consulta');
        })
        .catch((error) => {
            console.error('Não foi possível excluir o registro', error);
            res.status(500).send("Erro no servidor");
        });
});

// Rota para cadastrar um novo agendamento
app.post("/cadastrar", (req, res) => {
    post.Agendamentos.create(req.body)
        .then(() => {
            res.redirect('/consulta');
        })
        .catch((error) => {
            console.error('Não foi possível cadastrar o registro', error);
            res.status(500).send("Erro no servidor");
        });
});

// Rota para lidar com páginas não encontradas
app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
});

// Rota para lidar com erros de servidor
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro no servidor');
});

app.listen(8081, () => {
    console.log('Rodando na porta 8081');
});
