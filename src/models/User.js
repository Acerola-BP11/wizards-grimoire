const { DataTypes } = require('sequelize')
const sequelize = require('../utils/sequelize')
const Campaign = require('./Campaign')
const Character = require('./Character')
const Trait = require('./Trait')
const Spell = require('./Spell')

User.hasMany(Campaign)
User.hasMany(Character)
User.hasMany(Trait)
User.hasMany(Spell)

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Por favor digite um e-mail valido!'
            }
        }
    }

}, {
    sequelize,
    paranoid: true
})

User.sync()

module.exports = User