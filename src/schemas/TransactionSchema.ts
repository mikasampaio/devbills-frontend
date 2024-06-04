import { z } from 'zod';

export const createTransactionSchema = z.object({
  categoryId: z
    .string()
    .regex(/^(?!null$)/g, { message: 'Escolha uma categoria' }),
  title: z.string().min(1, { message: 'Título é obrigatório' }),
  amount: z
    .string({ required_error: 'Título é obrigatório' })
    .min(1, { message: 'Deve conter pelo menos 1 dígito' }),
  date: z.string().regex(/^(0[1-9]|[12][0-9]|3[01]\/0[0-9]|1[0-2]\/d{4}$)/, {
    message: 'Data inválida',
  }),
  type: z.enum(['income', 'expense'], {
    errorMap: () => ({ message: 'Selecione um tipo válido' }),
  }),
});

export type CreateTransactionSchema = z.infer<typeof createTransactionSchema>;

export const transactionsParams = z.object({
  title: z.string().optional(),
  categoryId: z.string().optional(),
  startDate: z
    .string()
    .regex(/^(0[1-9]|[12][0-9]|3[01]\/0[0-9]|1[0-2]\/d{4}$)/, {
      message: 'Data inválida',
    })
    .optional(),
  endDate: z
    .string()
    .regex(/^(0[1-9]|[12][0-9]|3[01]\/0[0-9]|1[0-2]\/d{4}$)/, {
      message: 'Data inválida',
    })
    .optional(),
});

export type TransactionParams = z.infer<typeof transactionsParams>;
