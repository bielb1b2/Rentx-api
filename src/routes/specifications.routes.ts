import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecificationService/CreateSpecificationController';

const specfificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specfificationsRoutes.post("/", createSpecificationController.handle)

export { specfificationsRoutes }