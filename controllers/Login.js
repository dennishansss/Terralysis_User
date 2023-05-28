import User from '../models/User.js';
import User_Google from '../models/User_Google.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import configJWT from '../config/Config.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Cari pengguna dengan email yang cocok
  const user = await User.findOne({ where: { email } });

  if (!user) {
    // Jika pengguna tidak ditemukan, kirim respons error
    return res.status(401).json({
      error: true,
      message: 'Invalid email/password or user not found',
    });
  }

  // Pengecekan password
  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    // Jika password tidak cocok, kirim respons error
    return res.status(401).json({
      error: true,
      message: 'Invalid email or password',
    });
  }

  // Jika email dan password valid, buat token JWT
  const token = jwt.sign({ userId: user.userId }, configJWT.jwtSecret);

  // Kirim respons dengan informasi login dan token JWT
  return res.json({
    error: false,
    message: 'login success',
    loginResult: {
      userId: user.userId,
      name: user.name,
      token: token,
    },
  });
};

export const loginGoogle = (req, res) => {
  const { email } = req.body;

  // Cari pengguna dengan email yang cocok
  const user = User_Google.findOne({ where: { email } });

  if (!user) {
    // Jika pengguna tidak ditemukan, kirim respons error
    return res.status(401).json({
      error: true,
      message: 'Invalid email or email not found',
    });
  }

  // Jika email valid, buat token JWT
  const token = jwt.sign({ userId: user.userId }, configJWT.jwtSecret);

  // Kirim respons dengan informasi login dan token JWT
  return res.json({
    error: false,
    message: 'login success via Google',
    loginResult: {
      userId: user.userId,
      name: user.name,
      token: token,
    },
  });
};
