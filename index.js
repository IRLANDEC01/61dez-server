import express from "express";
import mongoose from "mongoose";
import AudsRouter from "./routes/auds/index.js";
import GroupsRouter from "./routes/groups/index.js";
import EventKeysRouter from "./routes/eventKeys/index.js";
import cors from "cors"

const PORT = 3001
const URLMongoDB = 'mongodb://0.0.0.0:27017/61kafDEZ'
 
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', AudsRouter)
 
app.use('/', GroupsRouter)
app.use('/', EventKeysRouter)

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

 