import { Router } from "express";

const projectRouter = Router();

projectRouter.get("/projects");
projectRouter.post("/project/:id");
projectRouter.put("/project/:id");
projectRouter.delete("/project/:id");