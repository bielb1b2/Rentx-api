import { Router } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

//Listar Categorias
categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
})

// Cadastro de categoria
categoriesRoutes.post("/", (request, response) => {
    return createCategoryController().handle(request, response);
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})

export { categoriesRoutes };