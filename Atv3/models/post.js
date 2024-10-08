const db = require('./banco')

const Agendamentos = db.sequelize.define('agendamentos', {
    nome:{
        type: db.Sequelize.STRING,
    },
    celular: {
        type: db.Sequelize.STRING,
    },
    origem: {
        type: db.Sequelize.STRING,
    },
    data_contato: {
        type: db.Sequelize.DATE,
    },
    observacao: {
        type: db.Sequelize.TEXT,
    }
})

module.exports = {
    Agendamentos: Agendamentos,
}