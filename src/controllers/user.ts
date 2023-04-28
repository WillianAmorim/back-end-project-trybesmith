import { Request, Response } from 'express';
import UserService from '../services/user';

const create = async (req: Request, res: Response) => {
  const newUser = req.body;
  const user = await UserService.create(newUser);

  return res.status(201).json({ token: user });
};

const verifyLogin = async (req: Request, res: Response) => {
  console.log('controller');
  const { username, password } = req.body;

  const userToken = await UserService.verifyLogin(username, password);

  return res.status(200).json({ token: userToken });
};

export default {
  create,
  verifyLogin,
};