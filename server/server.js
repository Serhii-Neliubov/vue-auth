import express from 'express';
import mongoose from "mongoose";
import { RegisterUser, LoginUser } from './user.js';

const PORT = 5000;
const DB_URL = `mongodb+srv://warlog:80506067874@cluster0.pykanta.mongodb.net/`;
const app = express();

app.use(express.json());

app.post('/register', async (req, res) => {
  const {name, surname, email, password} = req.body;

  try {
    const user = await RegisterUser.create({ name, surname, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.post('/login', async (req, res) => {
  const {isRemembered, email, password} = req.body;

  try {
    const user = await LoginUser.create({ email, password, isRemembered});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to login user' });
  }
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

startApp();

app.get('/', (req, res) => {
  res.status(200).json('Hello World123');
});
