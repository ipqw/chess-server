import { Sequelize } from 'sequelize'
import pg from 'pg';

const sequelize = new Sequelize('postgres://bpglqpfg:1YTzhh6LudujpW1xSICDJi_B98Hn2x8_@mel.db.elephantsql.com/bpglqpfg',
    {
        dialect: 'postgres',
        dialectModule: pg,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
    }
)
export default sequelize