import { DashboardController } from "@/controllers/dashboard.controller";
import { Router } from "express";
// import { PrismaClient } from "@prisma/client";

const dashboardController = new DashboardController();
const router = Router();
// const prisma = new PrismaClient();

router.get("/dashboard", (request, response) => dashboardController.index(request, response))

export default router;