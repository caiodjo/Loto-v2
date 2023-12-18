import { Router } from 'express';
import planilhaRouter from '../resources/planilha/planilha.router';
import cartelaRouter from '../resources/cartela/cartela.router';

const router = Router();

router.use('/upload', planilhaRouter);
router.use('/cartela', cartelaRouter);

export default router;
