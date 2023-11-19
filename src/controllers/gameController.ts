import sequelize from "../db"
import ApiError from "../error/ApiError"
import { Game } from "../models/models"
import { Request, Response, NextFunction } from 'express'
class gameController{
    async create(req: Request, res: Response, next: NextFunction){
        try {
            const { name } = req.body
            const game = await Game.create({name})
            return res.json(game)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req: Request, res: Response){
        const games = await Game.findAll()
        return res.json(games)
    }
    async doMove(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params
            const { move } = req.body
            const game: any = await Game.findOne({where:{id}})
            game.moves = [...game.moves, move]
            await game.save()

            return res.json(game)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.body
            const game = await Game.findOne({where:{id}})
            if(game){
                Game.destroy({where:{id}})
                return res.json('Game was deleted')
            }
            else{
                return res.json('Game was not found')
            }
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
}
export default new gameController()