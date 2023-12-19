import { Router } from "express";
import cartelaController from "./cartela.controller";

const router = Router();

router.post("/start", cartelaController.startCombinations);
router.post("/", cartelaController.buildCombinations);

export default router;