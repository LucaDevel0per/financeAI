import { Router } from 'express';
import { createTransaction, listTransactions } from '../controllers/transaction.controller';

const router = Router();

// Rota GET /transactions -> Chama o controller listTransactions
router.get('/transactions', listTransactions);

// Rota POST /transactions -> Chama o controller createTransaction
router.post('/transactions', createTransaction);

export default router;