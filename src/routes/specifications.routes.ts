import { Router } from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecificationService';

const specfificationsRoutes = Router();


specfificationsRoutes.post("/", (request, response) => {
   return createSpecificationController.handle(request, response);
})

export { specfificationsRoutes }