import { NextFunction, Request, Response } from 'express';

const middlewareError = (error:Error, _req:Request, res:Response, _next:NextFunction) => {
  res.status(401).json({ message: error.message });
};

export default {
  middlewareError,
};