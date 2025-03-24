import express from 'express';
import { userRouter } from './routes/user';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
