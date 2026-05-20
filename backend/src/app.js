import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import connectToDb from "./database/mongodb.js";

dotenv.config();
const port = process.env.PORT

const app = express();
app.use(express.json())





app.use('/api/', authRouter);




app.get("/", (req, res) => {
    res.send(`Taskflow server is running at port : ${port} `);
});

app.listen(port, async () => {
    console.log(`Listning at port : ${port} `)
    await connectToDb();
});

export default app;