import { RegionController } from "@/controllers/region.controller";
import { Router } from "express";

const regionController = new RegionController();
const router = Router();

router.get("/index", (request, response) => regionController.getRegion(request, response))

export default router;