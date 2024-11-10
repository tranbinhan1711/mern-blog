import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import { request, response } from "express";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected ");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());



app.get('/', (req, res) => {
  res.send("Test api")
})
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.listen(3000, () => {
  console.log("Server is running on post 3000!!");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
})