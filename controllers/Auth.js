import jwt from 'jsonwebtoken';
import configJWT from '../config/Config.js';

export const checkAuthorization = (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.startsWith('Bearer ')) {
    const authToken = token.substring(7); // Mengambil token setelah 'Bearer '
    try {
      const decoded = jwt.verify(authToken, configJWT.jwtSecret);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
