import UserModel from '../models/user';

const create = async (username:string, vocation:string, level:number, password:string) => {
  const user = await UserModel.create(username, vocation, level, password);

  return user;
};

export default {
  create,
};