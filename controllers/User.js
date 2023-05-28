import User from '../models/User.js';
import User_Google from '../models/User_Google.js';

// Validasi email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validasi email
  if (!validateEmail(email)) {
    return res.status(400).json({
      error: true,
      message: 'Invalid email format',
    });
  }

  try {
    // Simpan user ke database
    const user = await User.create({ name, email, password });

    return res.json({
      error: false,
      message: 'Register success',
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: 'Internal server error',
    });
  }
};

export const registerGoogle = async (req, res) => {
  const { name, email } = req.body;

  // Validasi email
  if (!validateEmail(email)) {
    return res.status(400).json({
      error: true,
      message: 'Invalid email format',
    });
  }

  try {
    // Simpan user ke database
    const user = await User_Google.create({ name, email });

    return res.json({
      error: false,
      message: 'Register success via Google',
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: true,
      message: 'Internal server error',
    });
  }
};
