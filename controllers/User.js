import User from '../models/User.js';

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

export const registerGoogle = (req, res) => {
  // Proses register user menggunakan email Google
  return res.json({
    error: false,
    message: 'Register success via Google',
  });
};
