import api from './api';

interface GetParams {
  title?: string;
  categoryId?: string;
  startDate?: string;
  endDate?: string | Date;
  year?: number;
}

export interface TransactionRaw {
  _id: string;
  title: string;
  amount: number;
  date: string;
  category: Category;
  type: 'income' | 'expense';
}
[];

export interface Category {
  title: string;
  color: string;
  _id: string;
}

export interface CreateTransaction {
  title: string;
  amount: number;
  date: string;
  categoryId: string;
  type: 'income' | 'expense';
}

export interface Dashboard {
  balance: Balance;
  expenses: Expense[];
}

export interface Balance {
  _id: string;
  incomes: number;
  expenses: number;
  balance: number;
}

export interface Expense {
  _id: string;
  title: string;
  color: string;
  amount: number;
}

export interface FinancialEvolution {
  _id: number[];
  incomes: number;
  expenses: number;
  balance: number;
}
[];

export class TransactionService {
  static async get(params?: GetParams): Promise<TransactionRaw[]> {
    const response = await api.get<TransactionRaw[]>('/transactions', {
      params,
    });

    return response.data;
  }

  static async create(data: CreateTransaction) {
    const response = await api.post('/transactions', data);

    return response.data;
  }

  static async listDashboard(params?: GetParams) {
    const response = await api.get<Dashboard>('/transactions/dashboard', {
      params,
    });

    return response.data;
  }

  static async listFinancialEvolution(
    params?: GetParams,
  ): Promise<FinancialEvolution[]> {
    const response = await api.get<FinancialEvolution[]>(
      '/transactions/financial',
      { params },
    );

    return response.data;
  }
}
