require('dotenv').config()
import cors from 'cors'
import express from 'express'
import sequelize from './db'
import router from './routes/index'
import ErrorMiddleware from './middleware/ErrorMiddleware'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', router)
app.use(ErrorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}

start()