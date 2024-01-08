import { Router } from 'express';
import passport from 'passport';
import usersController from '../controllers/user.controller.js';
import multer from 'multer';

const upload = multer({ dest: 'documents/' });

const userRouter = Router();

userRouter.post('/', passport.authenticate('register'), usersController.postUser);

userRouter.get('/', usersController.getUser);

userRouter.post('/recovery', usersController.recoveryPassword);

userRouter.post('/resetpassword/:token', usersController.resetPassword);

userRouter.post('/:uid/documents', upload.array('documents'), usersController.uploadDocuments);

userRouter.delete('/:uid', usersController.deleteUser);

export default userRouter;