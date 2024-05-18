import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { CategoryService, CreateCategory } from '../services/category-requests';
import { Category } from '../services/transaction-request';

interface CategoryProps {
  createCategory: (data: CreateCategory) => Promise<void>;
  fetchCategory: () => Promise<void>;
  categories: Category[];
}

const CategoryContext = createContext<CategoryProps>({} as CategoryProps);

export function CategoriesContext({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<Category[]>([]);

  const createCategory = useCallback(async (data: CreateCategory) => {
    await CategoryService.create(data);
  }, []);

  const getCategory = useCallback(async () => {
    const response = await CategoryService.get();

    setCategory(response);
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories: category,
        createCategory,
        fetchCategory: getCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory(): CategoryProps {
  return useContext(CategoryContext);
}
