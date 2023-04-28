import express from 'express';

import ProductController from './controllers/product';
import UserController from './controllers/user';
import MiddlewareError from './Middleware/error';
import MiddlewareLogin from './Middleware/UserPassword';

require('express-async-errors');

const app = express();

app.use(express.json());

app.post('/products', ProductController.create);

app.get('/products', ProductController.listAll);

app.post('/users', UserController.create);

app.post('/login', MiddlewareLogin.userNamePasswordValidate, UserController.verifyLogin);

app.use(MiddlewareError.middlewareError);

export default app;
