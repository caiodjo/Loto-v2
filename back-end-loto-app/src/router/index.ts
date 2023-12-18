import { Router } from 'express';
import planilhaRouter from '../resources/planilha/planilha.router';

const router = Router();

router.use('/upload', planilhaRouter);

export default router;
