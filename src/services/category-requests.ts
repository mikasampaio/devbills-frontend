import api from './api';

export type CategoryRaw = Category[];

export interface Category {
  _id: string;
  title: string;
  color: string;
}

export interface CreateCategory {
  title: string;
  color: string;
}

export class CategoryService {
  static async get(): Promise<CategoryRaw> {
    const response = await api.get<CategoryRaw>('/categories');

    return response.data;
  }

  static async create(data: CreateCategory) {
    const response = await api.post('/categories', data);

    return response.data;
  }
}
