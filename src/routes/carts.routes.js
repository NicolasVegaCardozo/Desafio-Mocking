import { Router } from 'express';
import cartsController from '../controllers/carts.controller.js';
import { authorization, passportError } from '../utils/messageErrors.js';
const cartRouter = Router();

cartRouter.get('/', cartsController.getCarts);
cartRouter.get('/:cid', cartsController.getCart);
cartRouter.post('/:cid/purchase', cartsController.purchaseCart);
cartRouter.post('/', cartsController.postCart);
cartRouter.put(
	'/:cid/product/:pid',
	passportError('jwt'),
	authorization('user'),
	cartsController.putProductToCart
);
cartRouter.put(
	'/:cid/products/:pid',
	passportError('jwt'),
	authorization('user'),
	cartsController.putQuantity
);
cartRouter.put(
	'/:cid',
	passportError('jwt'),
	authorization('user'),
	cartsController.putProductsToCart
);
cartRouter.delete('/:cid', passportError('jwt'), authorization('user'), cartsController.deleteCart);
cartRouter.delete(
	'/:cid/products/:pid',
	passportError('jwt'),
	authorization('user'),
	cartsController.deleteProductFromCart
);
export default cartRouter;



// import { Router } from "express";
// import cartController from "../controllers/cart.controller.js";

// const cartRouter = Router();

// // Crear un nuevo carrito
// cartRouter.post("/", cartController.createCart);

// // Obtener todos los carritos
// cartRouter.get("/", cartController.getAllCarts);

// // Obtener un carrito específico por su ID
// cartRouter.get("/:cid", cartController.getCartById);

// // Agregar un producto a un carrito específico
// cartRouter.post("/:cid/products/:pid", cartController.addProductToCart);

// // Actualizar un producto en un carrito específico
// cartRouter.put("/:cid/products/:pid", cartController.updateProductInCart);

// // Eliminar un producto de un carrito específico
// cartRouter.delete("/:cid/products/:pid", cartController.removeProductFromCart);

// // Vaciar un carrito específico
// cartRouter.delete("/:cid", cartController.clearCart);

// export default cartRouter;


