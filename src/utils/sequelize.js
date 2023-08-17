const { Sequelize } = require('sequelize')

export const sequelize = new Sequelize({
    dialect: 'mariadb',
    dialectOptions: {
        user: 'root',
        password: '123mudar',
        database: ''
    },
    logging: (...msg) => console.log(msg)
})