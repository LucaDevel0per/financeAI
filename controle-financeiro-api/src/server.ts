import express from 'express';
import cors from 'cors';
import transactionRoutes from './routes/transaction.routes'; 

const app = express();
const PORT: number = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Servidor refatorado rodando na porta http://localhost:${PORT}`);
});