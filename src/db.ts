import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.DB_LINK || 'postgres://postgresss:ibxTIMdoTY9hpQp3qiX1vQie879Jl5hs@dpg-cm7g17a1hbls73aac1jg-a.frankfurt-postgres.render.com/chess_cn8j')
export default sequelize