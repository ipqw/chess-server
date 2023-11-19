import { Router } from "express";
import gameController from "../controllers/gameController";
const router: Router = Router()

router.get('/avalible', gameController.getAvalible)
router.get('/:id', gameController.getOne)
router.get('/', gameController.getAll)

router.post('/join', gameController.join)
router.post('/:id', gameController.doMove)
router.post('/', gameController.create)

router.delete('/', gameController.delete)

export default router