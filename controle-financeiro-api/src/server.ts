import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

const PORT: number = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send("API Rodando!");
});

app.listen(PORT, () => {
    console.log(`rodando em > http://localhost:${PORT}`)
})