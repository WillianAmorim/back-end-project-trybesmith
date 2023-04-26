import express from 'express';

import ProductController from './controllers/product';
import UserController from './controllers/user';

const app = express();

app.use(express.json());

app.post('/products', ProductController.create);

app.get('/products', ProductController.listAll);

app.post('/users', UserController.create);

app.get('/login');

export default app;
