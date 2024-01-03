import { Sequelize } from 'sequelize'
import * as pg from 'pg';

const sequelize = new Sequelize(
    process.env.DB_NAME || 'chess',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        dialectModule: pg,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
    }
)
export default sequelize