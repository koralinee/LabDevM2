import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dbLabdev', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!')
}).catch(erro => {
    console.log('Falha ao se conectar ' + erro)
})

const Clientes = sequelize.define('cliente', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
})

Clientes.sync({ force: true })

Clientes.create(
    {
        nome: 'Giovanna Passos',
        endereco: '516 Walden Dr',
        bairro: 'Beverly Hills',
        cep: '90210-090',
        telefone: '(11) 9876-5432',
        celular: '(11) 91234-5678'
    },
    {
        nome: 'Billie Eilish',
        endereco: '2592 Hyler Avenue',
        bairro: 'Highland Park',
        cep: '90041-294',
        telefone: '(31) 0404-3506',
        celular: '(31) 90807-3956'
    },
    {
        nome: 'Justin Bieber',
        endereco: '100 N Carolwood Dr',
        bairro: 'Beverly Hills',
        cep: '90077-090',
        telefone: '(31) 0620-2187',
        celular: '(31) 90210-6149'
    },
)