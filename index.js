import express from 'express';
import { register, login, image} from './routes/Routes.js';
import { checkAuthorization } from './controllers/Auth.js';
import sequelize from './config/Database.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(register);
app.use(login);

//cek token
app.use(checkAuthorization);

//upload image user
app.use(image);

//make static image
app.use(express.static('public/images'));

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
