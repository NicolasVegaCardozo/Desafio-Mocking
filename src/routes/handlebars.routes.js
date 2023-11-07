import { Router } from 'express';

const handlebarsRouter = Router();

handlebarsRouter.get('/home', (req, res) => {
	res.render('index', {
		rutaCSS: 'index',
		rutaJS: 'index',
	});
});

handlebarsRouter.get('/realtimeproducts', (req, res) => {
	res.render('realTimeProducts', {
		rutaCSS: 'realTimeProducts',
		rutaJS: 'realTimeProducts',
	});
});

handlebarsRouter.get('/chat', (req, res) => {
	res.render('chat', {
		rutaCSS: 'chat',
		rutaJS: 'chat',
	});
});

handlebarsRouter.get('/products', (req, res) => {
	const user = req.session.user;
	res.render('products', {
		rutaCSS: 'products',
		rutaJS: 'products',
		user,
	});
});

handlebarsRouter.get('/carts/:cid', (req, res) => {
	const { cid } = req.params;
	cartId = cid;
	res.redirect('/carts');
});

handlebarsRouter.get('/carts', (req, res) => {
	res.render('carts', {
		rutaCSS: 'carts',
		rutaJS: 'carts',
	});
});

handlebarsRouter.get('/register', (req, res) => {
	res.render('register', {
		rutaCSS: 'register',
		rutaJS: 'register',
	});
});

export default handlebarsRouter;