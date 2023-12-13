import sequelize from '../db'
import {DataTypes} from 'sequelize'

export const Game = sequelize.define('game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: true},
    moves: {type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: []},
    counter: {type: DataTypes.INTEGER, defaultValue: 0},
    ownerColor: {type: DataTypes.BOOLEAN, defaultValue: false},
    members: {type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: []},
    winner: {type: DataTypes.STRING, allowNull: true}
})