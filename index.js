import express from 'express';
import router from './routes/Routes.js';
import sequelize from './config/Database.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(router);

// Sinkronisasi model dengan database
sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
    // Menjalankan server pada port 3000
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
