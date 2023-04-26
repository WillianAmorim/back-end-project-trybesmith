import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../Types/user';

const secretKey = process.env.JWT_SECRET || 'secret';

const configJWT: SignOptions = {
  expiresIn: '1000d',
  algorithm: 'HS256',
};

const generateToken = (payload:User) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

export default {
  generateToken,
};