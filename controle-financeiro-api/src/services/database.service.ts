import fs from 'fs';
import path from 'path';
import { Transaction } from '../types/transaction.types';

const DB_PATH = path.resolve(__dirname, '..', '..', 'database.json'); 

interface Database {
  transactions: Transaction[];
}

// Lê todo o banco de dados
export const readDB = (): Database => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Se o arquivo não existir, cria um vazio
    return { transactions: [] };
  }
};

// Escreve no banco de dados
export const writeDB = (data: Database): void => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};