import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';
import { specfificationsRoutes } from './specifications.routes';

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specfificationsRoutes);

export { router }