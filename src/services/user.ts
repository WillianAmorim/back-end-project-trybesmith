import { User } from '../Types/user';
import UserModel from '../models/user';

import Util from '../util/auth';

const create = async (newUser:User) => {
  const user = await UserModel.create(newUser);

  const token = Util.generateToken(user);

  return token;
};

export default {
  create,
};