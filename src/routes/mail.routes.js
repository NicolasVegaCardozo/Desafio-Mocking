import { Router } from 'express';
import mailingController from '../controllers/mail.controller.js';

const mailingRouter = Router();

mailingRouter.get('/', mailingController.sendEmail);

export default mailingRouter;