import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../Types/user';

const create = async (newUser:User) => {
  const sql = `insert into Trybesmith.users
    (username, vocation, level, password) values (?, ?, ?, ?)
  `;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    sql,
    [newUser.username, newUser.vocation, newUser.level, newUser.password],
  );
  
  return { id: insertId, ...newUser };
};

export default {
  create,
};