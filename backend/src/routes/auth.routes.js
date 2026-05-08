import { Router } from "express";
const authRouter = Router();


authRouter.post('/signup', (req, res) => res.send({title : 'request sent'}));


export default authRouter;