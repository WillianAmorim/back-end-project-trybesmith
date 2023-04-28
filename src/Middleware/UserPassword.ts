import { NextFunction, Request, Response } from 'express';

const userNamePasswordValidate = (req:Request, res:Response, next:NextFunction) => {
  const { username, password } = req.body;
  console.log('middleware', username);
  
  if (username && password) {
    next();
  } 

  if (!username) res.status(400).json({ message: '"username" is required' });
  if (!password) res.status(400).json({ message: '"password" is required' });
};

export default {
  userNamePasswordValidate,
};