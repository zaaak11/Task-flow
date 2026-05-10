import { Router } from "express";
const authRouter = Router();


authRouter.post('/signup', (req, res) => res.send({title : 'request sent'}));
authRouter.post('/signin', (req, res) )


export default authRouter;