import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('HERE IS DONE');
});

app.listen(PORT, () => {
  console.log(`API is online: http://localhost:${PORT}`);
});