import express from "express";
import mongoose from "mongoose";
import router from "./routes/Auds/index.js";
import cors from "cors"

const PORT = 3001
const URLMongoDB = 'mongodb://0.0.0.0:27017/61kafDEZ'

const app = express();
app.use(express.json());
app.use(cors());


const cadetGroups = [
  {
    name: 611 / 11,
    course: 2
  },
  {
    name: 611 / 12,
    course: 2
  },
  { 
    name: 611 / 12,
    course: 2
  },

]
app.use('/', router)

async function start() {
  try {
    mongoose
      .connect(URLMongoDB)
      .then(() => console.log('Connected to MongoDB!'))
      .then(() => {
      })
      .catch(() => console.log(`Connection DB error ${err}`))
    app.listen(PORT, () => {
      console.log(`Сервер запущен: ${PORT} `);
    });

  } catch (error) {
    console.log(error);
  }
}
start();

