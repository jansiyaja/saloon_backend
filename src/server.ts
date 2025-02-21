import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = 'mongodb+srv://jansiyajahan8:jansiyajahan8@cluster0.vv9e7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the Node.js + TypeScript + Express + MongoDB backend!');
});

// MongoDB connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
