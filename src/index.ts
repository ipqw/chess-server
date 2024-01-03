require('dotenv').config()
import cors from 'cors'
import express from 'express'
import {Request, Response} from 'express'
import sequelize from './db'
import router from './routes/index'
import ErrorMiddleware from './middleware/ErrorMiddleware'

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/api', router)
app.use(ErrorMiddleware)

app.get('/' , (req: Request, res: Response) => {
    res.status(200).json({message: 'WORKING'})
})

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


export default app