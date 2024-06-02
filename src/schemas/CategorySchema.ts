import { z } from 'zod';

export const createCategorySchema = z.object({
  title: z.string({ required_error: 'Título é obrigatório' }),
  color: z
    .string({ required_error: 'Cor é obrigatório' })
    .regex(/^#[A-Fa-f0-9]{6}$/),
});

export type CreateCategorySchema = z.infer<typeof createCategorySchema>;
