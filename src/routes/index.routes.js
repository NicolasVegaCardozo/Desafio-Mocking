import { Router } from 'express';
import cartRouter from './carts.routes.js';
import messageRouter from './messages.routes.js';
import productRouter from './products.routes.js';
import userRouter from './user.routes.js';
import sessionRouter from './session.routes.js';
import routerHandlebars from './handlebars.routes.js';
import mailingRouter from './mail.routes.js';
import ticketRouter from './tickets.routes.js';

const router = Router();

router.use('/api/products', productRouter);
router.use('/api/messages', messageRouter);
router.use('/api/carts', cartRouter);
router.use('/api/users', userRouter);
router.use('/api/sessions', sessionRouter);
router.use('/api/mail', mailingRouter);
router.use('/api/tickets', ticketRouter);

router.use('/static', routerHandlebars);

export default router;