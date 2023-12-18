import { Router } from "express";
import readSpreadSheet from "./planilha.controller";

const router = Router()

router.post("/", readSpreadSheet);

export default router;