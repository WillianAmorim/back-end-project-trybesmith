import ProductModel from '../models/product';

const create = async (name:string, amount:string) => {
  const product = await ProductModel.create(name, amount);
  return product;
};

const listAll = async () => {
  const products = await ProductModel.listAll();

  return products;
};

export default {
  create,
  listAll,
};