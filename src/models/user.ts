import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const create = async (username:string, vocation:string, level:number, password:string) => {
  const sql = `insert into Trybesmith.users
    (username, vocation, level, password) values (?, ?, ?, ?)
  `;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(sql, [username, vocation, level, password]);
  
  return {
    id: insertId,
    username, 
    vocation, 
    level,
    password,
  };
};

export default {
  create,
};