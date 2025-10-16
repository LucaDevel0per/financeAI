import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { Transaction } from '../types/transaction.types';
import { readDB, writeDB } from '../services/database.service';

// Função para LISTAR todas as transações
export const listTransactions = (req: Request, res: Response) => {
  try {
    const db = readDB();
    return res.status(200).json(db.transactions);
  } catch (error) {
    return res.status(500).send('Erro ao ler o banco de dados.');
  }
};

// Função para CRIAR uma nova transação
export const createTransaction = (req: Request, res: Response) => {
  try {
    const { date, description, category, amount, type } = req.body;

    if (!date || !description || !category || amount === undefined || !type) {
      return res.status(400).send('Dados incompletos');
    }

    const newTransaction: Transaction = {
      id: randomUUID(),
      date,
      description,
      category,
      amount: Number(amount),
      type,
    };

    const db = readDB();
    db.transactions.push(newTransaction);
    writeDB(db);

    return res.status(201).json(newTransaction);
  } catch (error) {
    return res.status(500).send('Erro ao salvar no banco de dados.');
  }
};