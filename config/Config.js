import dotenv from 'dotenv';
dotenv.config();

const configJWT = {
  jwtSecret: process.env.JWT_SECRET,
};

export default configJWT;
