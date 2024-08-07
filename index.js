import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import soldItemsRoutes from './routes/soldItemsRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectToDatabase();

app.use('/api/users', userRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/solditems', soldItemsRoutes);


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
