import { Request, Response } from 'express';
import ProductService from '../Services/product';

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const product = await ProductService.create(name, amount);

  return res.status(201).json(product);
};

const listAll = async (req: Request, res: Response) => {
  const products = await ProductService.listAll();

  return res.status(200).json(products);
};

export default {
  create,
  listAll,
};