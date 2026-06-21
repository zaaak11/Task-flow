import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import connectToDb from "./database/mongodb.js";
import cors from 'cors';


dotenv.config();
const port = process.env.PORT

const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);




app.get("/", (req, res) => {
    res.send(`Taskflow server is running at port : ${port} `);
});

const startServer = async () => {
  try {
    await connectToDb();

    app.listen(port, () => {
      console.log(`Listening at port: ${port}`);
    });

  } catch (error) {
    console.error("Server failed to start:", error);
  }
};

startServer();

export default app;