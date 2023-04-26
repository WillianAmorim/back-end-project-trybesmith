import { Request, Response } from 'express';
import UserService from '../services/user';

const create = async (req: Request, res: Response) => {
  const newUser = req.body;
  const user = await UserService.create(newUser);

  return res.status(201).json({ token: user });
};

export default {
  create,
};