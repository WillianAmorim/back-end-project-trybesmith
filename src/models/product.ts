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

const listAll = async ():Promise<Product[]> => {
  const result = await connection.execute('SELECT * FROM Trybesmith.products');
  const [rows] = result;
  return rows as Product[];
};

export default {
  create,
  listAll,
};