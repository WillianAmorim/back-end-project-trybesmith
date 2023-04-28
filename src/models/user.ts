import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../Types/user';
import { Login } from '../Types/login';

const create = async (newUser:User):Promise<User> => {
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

const getName = async (username: string): Promise<Login | undefined> => {
  const query = 'SELECT * from Trybesmith.users WHERE username = ?';
  const [[userName]] = await connection.execute<RowDataPacket[]>(query, [username]);

  console.log(userName);

  return userName as Login | undefined;
};

const getPassword = async (password: string): Promise<Login | undefined> => {
  const query = 'SELECT * from Trybesmith.users WHERE password = ?';
  const [[userPassword]] = await connection.execute<RowDataPacket[]>(query, [password]);

  console.log(userPassword);

  return userPassword as Login | undefined;
};

export default {
  create,
  getName,
  getPassword,
};