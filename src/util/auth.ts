import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../Types/user';
import { Token } from '../Types/newToken';

const secretKey = process.env.JWT_SECRET || 'secret';

const configJWT: SignOptions = {
  expiresIn: '1000d',
  algorithm: 'HS256',
};

const generateToken = (payload:User) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

const generateTokenLogin = (payload: Token) => {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token;
};

export default {
  generateToken,
  generateTokenLogin,
};