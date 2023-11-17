import sequelize from '../db'
import {DataTypes} from 'sequelize'

export const Game = sequelize.define('game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: true},
    moves: {type: DataTypes.ARRAY(DataTypes.STRING)}
})