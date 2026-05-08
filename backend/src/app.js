import dotenv from "dotenv";
import express from "express";
dotenv.config();
const port = process.env.PORT


const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send(`Taskflow server is running at port : ${port} `);
});

app.listen(port, () => {
    console.log(`Listning at port : ${port} `)
});

export default app;