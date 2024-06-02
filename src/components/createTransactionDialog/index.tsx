import { zodResolver } from '@hookform/resolvers/zod';
import { InputMask } from '@react-input/mask';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useCategory } from '../../hooks/category-context';
import {
  CreateTransactionSchema,
  createTransactionSchema,
} from '../../schemas/TransactionSchema';
import { TransactionService } from '../../services/transaction-request';
import Button from '../button';
import Dialog from '../dialog';
import { Input } from '../input';
import Title from '../title';
import {
  Container,
  Content,
  CurrencyInput,
  InputGroup,
  RadioGroup,
} from './styles';

export default function CreateTransactionDialog() {
  const [open, setOpen] = useState(false);
  const { fetchCategory, categories } = useCategory();

  const methods = useForm<CreateTransactionSchema>({
    resolver: zodResolver(createTransactionSchema),
  });
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: CreateTransactionSchema) => {
    try {
      await TransactionService.create({
        ...data,
        amount: Number(data.amount.replace(/[^0-9]/g, '')),
      });
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setValue('title', '');
    setValue('categoryId', 'null');
    setValue('amount', '');
    setValue('date', dayjs().format('DD/MM/YYYY'));
    setValue('type', 'income');
    fetchCategory();
  }, [open]);

  return (
    <Dialog
      trigger={<Button>Nova Transação</Button>}
      isOpen={open}
      onOpenChange={setOpen}
    >
      <FormProvider {...methods}>
        <Container>
          <Title
            title="Nova transação"
            subtitle="Crie uma nova transação para seu controle financeiro"
          />

          <form>
            <Content>
              <InputGroup>
                <label>Categoria</label>
                <select {...register('categoryId')}>
                  <option value="null">Selecione uma categoria...</option>
                  {categories.length >= 1 &&
                    categories.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.title}
                      </option>
                    ))}
                </select>
                <span>{errors.categoryId && errors.categoryId.message}</span>
              </InputGroup>
              <Input
                name="title"
                label="Nome"
                type="text"
                placeholder="Nome da transação..."
                variant="black"
              />

              <InputGroup>
                <label>Valor</label>
                <CurrencyInput
                  format="currency"
                  currency="BRL"
                  placeholder="R$0,00"
                  {...register('amount')}
                />

                <span>{errors.amount && errors.amount.message}</span>
              </InputGroup>

              <InputMask
                name="date"
                label="Início"
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                placeholder="dd/mm/aaaa"
                variant="black"
              />

              <RadioGroup>
                <div>
                  <input
                    type="radio"
                    id="income"
                    value="income"
                    {...register('type')}
                  />
                  <label htmlFor="income">Receita</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="expense"
                    value="expense"
                    {...register('type')}
                  />
                  <label htmlFor="expense">Despesa</label>
                </div>
                <span>{errors.type && errors.type.message}</span>
              </RadioGroup>
            </Content>
            <footer>
              <Button
                variant="outline"
                type="button"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button onClick={handleSubmit(onSubmit)}>Cadastrar</Button>
            </footer>
          </form>
        </Container>
      </FormProvider>
    </Dialog>
  );
}
