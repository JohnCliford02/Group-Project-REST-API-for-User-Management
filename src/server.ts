import express from 'express';
import { userRouter } from './routes/users';
import * as database from './config/database'; 
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

app.use('/api', userRouter);

database.connect().then(() => {
  console.log('Connected to the database');
}).catch((error: any) => {
  console.error('Error connecting to the database:', error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
