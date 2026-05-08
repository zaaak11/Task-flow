import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import connectToDb from "./database/mongodb.js";

const app = express();
app.use(express.json())

dotenv.config();
const port = process.env.PORT


app.use('/api/auth', authRouter);



app.get("/", (req, res) => {
    res.send(`Taskflow server is running at port : ${port} `);
});

app.listen(port, async () => {
    console.log(`Listning at port : ${port} `)
    await connectToDb();
});

export default app;