import dayjs from 'dayjs';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { TransactionParams } from '../schemas/TransactionSchema';
import {
  Dashboard,
  FinancialEvolution,
  TransactionRaw,
  TransactionService,
} from '../services/transaction-request';

interface TransactionProps {
  getTransaction: (params: TransactionParams) => Promise<void>;
  transactions: TransactionRaw[];

  getDashboard: (
    params: Pick<TransactionParams, 'startDate' | 'endDate'>,
  ) => Promise<void>;
  dashboard: Dashboard;

  financialEvolution: FinancialEvolution[];
  getFinancialEvolution: (params: { year: number }) => Promise<void>;
}

const TransactionContext = createContext<TransactionProps>(
  {} as TransactionProps,
);

export function TransactionsContext({ children }: { children: ReactNode }) {
  const [transaction, setTransaction] = useState<TransactionRaw[]>([]);
  const [dashboard, setDashboard] = useState<Dashboard>({} as Dashboard);
  const [financialEvolution, setFinancialEvolution] = useState<
    FinancialEvolution[]
  >([]);

  const getTransaction = useCallback(async (params: TransactionParams) => {
    const response = await TransactionService.get({
      ...params,
      /*  startDate: dayjs(params.startDate).format('YYYY-MM-DD'),
      endDate: dayjs(params.endDate).format('YYYY-MM-DD'), */
      startDate: '2024-01-01',
    });

    setTransaction(response);
  }, []);

  const getDashboard = useCallback(
    async ({
      startDate,
      endDate,
    }: Pick<TransactionParams, 'startDate' | 'endDate'>) => {
      const response = await TransactionService.listDashboard({
        startDate,
        endDate,
      });

      setDashboard(response);
    },
    [],
  );

  const getFinancialEvolution = useCallback(
    async ({ year }: { year: number }) => {
      const response = await TransactionService.listFinancialEvolution({
        year,
      });

      setFinancialEvolution(response);
    },
    [],
  );

  return (
    <TransactionContext.Provider
      value={{
        transactions: transaction,
        getTransaction,
        getDashboard,
        dashboard,
        financialEvolution,
        getFinancialEvolution,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction(): TransactionProps {
  return useContext(TransactionContext);
}
