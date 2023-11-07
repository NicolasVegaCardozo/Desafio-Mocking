import { Router } from "express";
import { getProducts, getProduct, postProduct, putProduct, deleteProduct } from "../controllers/product.controller.js";
import { passportError, authorization } from "../utils/messageErrors.js";
import { generateMockProducts } from '../controllers/mockingController.js';


const productRouter = Router()

productRouter.get('/', getProducts)
productRouter.get('/:id', getProduct)
productRouter.get('/generate-mock-products', generateMockProducts);
productRouter.post('/', passportError('jwt'), authorization('user'), postProduct)
productRouter.put('/:id', passportError('jwt'), authorization('Admin'), putProduct)
productRouter.delete('/:id', passportError('jwt'), authorization('Admin'), deleteProduct)



export default productRouter;