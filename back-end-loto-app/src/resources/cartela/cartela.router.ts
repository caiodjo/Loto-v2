import { Router, application } from "express";
import cartelaController from "./cartela.controller";
import multer from "multer";
import { paramValidate } from "../../middlewares/paramValidate";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/filter", cartelaController.filter);
router.post("/upload", upload.single("file"), cartelaController.readWorkSheet);
router.post("/build", paramValidate("games"), cartelaController.exportXlsx);
router.get("/check", paramValidate("numbers"), cartelaController.checkLength);

export default router;
