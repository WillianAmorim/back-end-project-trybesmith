import express from 'express';

import ProductController from './Controllers/product';

const app = express();

app.use(express.json());

app.post('/products', ProductController.create);

export default app;
