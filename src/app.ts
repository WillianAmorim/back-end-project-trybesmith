import express from 'express';

import ProductController from './controllers/product';

const app = express();

app.use(express.json());

app.post('/products', ProductController.create);

app.get('/products', ProductController.listAll);

export default app;
