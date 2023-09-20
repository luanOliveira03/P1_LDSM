const db = require("./banco")

const Prova = db.sequelize.define('prova',{
    NOME:{
        type: db.Sequelize.STRING
    },
    RA:{
        type: db.Sequelize.INTEGER
    },
    NOTA:{
        type: db.Sequelize.BOOLEAN
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

Prova.sync({force:true})

module.exports = Prova