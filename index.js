import express from 'express';
import router from './routes/Routes.js';

const app = express();
const port = 4000;

app.use(express.json());
app.use(router)

// Menjalankan server pada port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
