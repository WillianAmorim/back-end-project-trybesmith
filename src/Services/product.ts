import ProductModel from '../Models/product';

const create = async (name:string, amount:string) => {
  const product = await ProductModel.create(name, amount);
  console.log(product);
  return product;
};

export default {
  create,
};