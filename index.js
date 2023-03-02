import express from "express";

const PORT = 3001
const app = express();
app.use(express.json());

async function start() {
    try {
        // mongoose
        //     .connect(URLMongoDB)
        //     .then(() => console.log('Connected to MongoDB!'))
        //     .then(() => {
        //     })
        //     .catch(() => console.log(`Connection DB error ${err}`))
            
            app.listen(PORT, () => {
                console.log(`Сервер запущен: ${PORT} `);
            });

    } catch (error) {
        console.log(error);
    }
}
start();

