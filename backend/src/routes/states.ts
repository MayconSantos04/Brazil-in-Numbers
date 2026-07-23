import { StatesController } from "@/controllers/states.controller";
import { Router } from "express";
// import { PrismaClient } from "@prisma/client";

const statesController = new StatesController();
const router = Router();
// const prisma = new PrismaClient();

router.get("/states", (request, response) => statesController.index(request, response))

export default router;