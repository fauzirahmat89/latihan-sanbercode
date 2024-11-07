import {Router} from "express";
import productControllers from "../controllers/product.controllers";
import categoryControllers from "../controllers/category.controllers";

const router = Router()

//CRUD Products
router.post("/products", productControllers.create);
router.get("/products", productControllers.findAll);
router.get("/products/:id", productControllers.findOne);
router.put("/products/:id", productControllers.update);
router.delete("products/:id", productControllers.remove);
//CRUD Categories
router.post("/categories", categoryControllers.create);
router.get("/categories", categoryControllers.findAll);
router.get("/categories/:id", categoryControllers.findOne);
router.put("/categories/:id", categoryControllers.update);
router.delete("categories/:id", categoryControllers.remove);

export default router;