import { Router } from 'express';
import messagesController from '../controllers/messages.controller.js';
import { authorization, passportError } from '../utils/messageErrors.js';

const messageRouter = Router();

messageRouter.get('/', messagesController.getMessages);

messageRouter.post(
	'/',
	passportError('jwt'),
	authorization('user'),
	messagesController.postMessage
);

export default messageRouter;