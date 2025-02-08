import { Sequelize } from 'sequelize'
import pg from 'pg';

const sequelize = new Sequelize('postgres://neondb_owner:npg_JEmGs8QgLup7@ep-misty-cloud-a2vgrmav-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require',
    {
        dialect: 'postgres',
        dialectModule: pg,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
    }
)
export default sequelize