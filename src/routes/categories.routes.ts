import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategory/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp"
})

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

//Listar Categorias
categoriesRoutes.get("/", listCategoriesController.handle)

// Cadastro de categoria
categoriesRoutes.post("/", createCategoryController.handle);

//Upload file categoria
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export { categoriesRoutes };