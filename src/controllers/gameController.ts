import ApiError from "../error/ApiError"
import { Game } from "../models/models"
import { Request, Response, NextFunction } from 'express'
class gameController{
    async create(req: Request, res: Response, next: NextFunction){
        try {
            let { name, ownerColor } = req.body
            if(ownerColor === null){
                ownerColor = Boolean(Math.floor(Math.random() * 2))
            }
            const game = await Game.create({name, ownerColor})
            return res.json(game)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req: Request, res: Response, next: NextFunction){
        try {
            const games = await Game.findAll()
            return res.json(games)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
        
    }
    async getOne(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params
            const game = await Game.findOne({where: {id}})
            return res.json(game)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAvalible(req: Request, res: Response, next: NextFunction){
        try {
            const games = await Game.findAll({where: {counter: 1}})
            return res.json(games)
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async join(req: Request, res: Response, next: NextFunction){
        try {
            const { id, ip } = req.body
            const game: any = await Game.findOne({where: {id}})
            let isUserExists: boolean = false
            game.members.map((el: any) => {
                el == ip ? isUserExists = true : ''
            })
            if(isUserExists){
                return res.json(game)
            }
            if(game.counter < 2){
                game.counter++
                game.members = [...game.members, ip]
                await game.save()
                return res.json(game)
            }
            return res.status(400).json({message: 'This game is full'})
            
        } catch (e: any) {
            next(ApiError.badRequest(e.message))
        }
    }
    async doMove(req: Request, res: Response, next: NextFunction){
        try {
            const { id } = req.params
            const { move, winner } = req.body
            const game: any = await Game.findOne({where:{id}})
            if(game.counter === 2){
                game.moves = [...game.moves, move]
                if(winner !== null){
                    game.winner = winner
                }
                await game.save()
                return res.json(game)
            }
            else{
                return res.json({message: 'This game is not full'})
            }
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