import { Router, application } from "express";
import cartelaController from "./cartela.controller";
import multer from "multer";


const router = Router();
const storage = multer.memoryStorage();
const upload = multer({storage});

router.post("/filter", cartelaController.filter);
router.post("/upload", upload.single('file'), cartelaController.readWorkSheet);

export default router;