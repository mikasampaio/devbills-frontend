import api from './api';

interface GetParams {
  title?: string;
  categoryId?: string;
  startDate?: Date;
  endDate?: Date;
  year?: number;
}

export interface TransactionRaw {
  _id: string;
  title: string;
  amount: number;
  date: string;
  category: Category;
  type: string;
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
  type: string;
}

export class TransactionService {
  static async get(params?: GetParams): Promise<TransactionRaw> {
    const response = await api.get('/transactions', { params });

    return response.data;
  }

  static async create(data: CreateTransaction) {
    const response = await api.post('/transactions', data);

    return response.data;
  }

  static async listDashboard(params?: GetParams) {
    const response = await api.get('/transactions/dashboard', { params });

    return response.data;
  }

  static async listFinancialEvolution(params?: GetParams) {
    const response = await api.get('/transactions/financial', { params });

    return response.data;
  }
}
