import { Sequelize } from 'sequelize'

// const sequelize = new Sequelize(
//     process.env.DB_NAME || 'chess',
//     process.env.DB_USER || 'postgres',
//     process.env.DB_PASSWORD,
//     {
//         dialect: 'postgres',
//         host: process.env.DB_HOST,
//         port: Number(process.env.DB_PORT),
//     }
// )
const sequelize = new Sequelize('postgres://bpglqpfg:1YTzhh6LudujpW1xSICDJi_B98Hn2x8_@mel.db.elephantsql.com/bpglqpfg')
export default sequelize