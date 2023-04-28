// import { Token } from '../Types/newToken';
import { User } from '../Types/user';
import UserModel from '../models/user';

import Util from '../util/auth';

const create = async (newUser:User) => {
  const user = await UserModel.create(newUser);

  const token = Util.generateToken(user);

  return token;
};

const verifyLogin = async (username:string, password:string) => {
  const resultName = await UserModel.getName(username);
  const resultPassword = await UserModel.getPassword(password);

  if (!resultName || !resultPassword) throw new Error('Username or password invalid');

  const nameUser = resultName.username;
  const passwordUser = resultPassword.password;

  const token = Util.generateTokenLogin({ nameUser, passwordUser });

  return token;
};

export default {
  create,
  verifyLogin,
};