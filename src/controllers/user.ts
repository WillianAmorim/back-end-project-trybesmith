import { Request, Response } from 'express';
import UserService from '../services/user';

const create = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  const user = await UserService.create(username, vocation, level, password);

  return res.status(201).json(user);
};

export default {
  create,
};