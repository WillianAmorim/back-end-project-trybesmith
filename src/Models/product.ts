import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../Types/product';

const create = async (name:string, amount:string):Promise<Product> => {
  const sql = 'insert into Trybesmith.products (name, amount) values (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(sql, [name, amount]);
  return {
    id: insertId,
    name,
    amount,
  };
};

export default {
  create,
};