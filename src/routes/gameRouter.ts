import { Router } from "express";
import gameController from "../controllers/gameController";
const router: Router = Router()

router.get('/', gameController.getAll)
router.post('/', gameController.create)
router.post('/:id', gameController.doMove)
router.delete('/', gameController.delete)

export default router