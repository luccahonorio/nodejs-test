import {Router} from 'express'
import KitController from './controllers/KitController'

const routes = Router()

routes.get("/kits",KitController.index_name)
routes.get("/kits/:id",KitController.get_by_id)
routes.post("/kits",KitController.create_kit)
routes.put("/kits/:id",KitController.update_kit)
routes.delete("/kits/:id",KitController.delete_kit)

export default routes