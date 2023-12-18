import { Router } from "express";
import buildCombinations from "./cartela.controller";

const router = Router();

router.post("/", buildCombinations);

export default router;