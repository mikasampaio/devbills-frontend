import { zodResolver } from '@hookform/resolvers/zod';
import { InputMask } from '@react-input/mask';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { BsArrowDownLeftCircle } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import { PiCurrencyCircleDollar } from 'react-icons/pi';

import { ButtonIcon } from '../../components/button-icon';
import { CardBalance } from '../../components/cardBalance';
import { CategoriesPieChart } from '../../components/categoryPieChart';
import CreateCategoryDialog from '../../components/createCategoryDialog';
import CreateTransactionDialog from '../../components/createTransactionDialog';
import { FinancesBarChart } from '../../components/evolutionFinancialBarChart';
import { Input } from '../../components/input';
import Title from '../../components/title';
import Transaction from '../../components/transaction';
import { useTransaction } from '../../hooks/transaction-context';
import Logo from '../../images/logo';
import {
  TransactionParams,
  transactionsParams,
} from '../../schemas/TransactionSchema';
import { Category } from '../../services/category-requests';
import { theme } from '../../styles/theme';
import {
  Aside,
  CategoryBadge,
  ChartContainer,
  ChartContent,
  ChartFilter,
  Filters,
  Header,
  InputGroup,
  Main,
  Row,
  Section,
  Spacer,
} from './styles';

interface Item {
  title: string;
  value: number;
  icon: JSX.Element;
  variant?: 'balance' | 'income' | 'expense';
}
[];

export function App() {
  const methods = useForm<TransactionParams>({
    resolver: zodResolver(transactionsParams),
    defaultValues: {
      categoryId: undefined,
      title: undefined,
    },
  });
  const { setValue, watch, handleSubmit } = methods;

  const {
    transactions,
    getTransaction,
    dashboard,
    getDashboard,
    financialEvolution,
    getFinancialEvolution,
  } = useTransaction();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  useEffect(() => {
    getDashboard({ startDate: watch('startDate'), endDate: watch('endDate') });
    getTransaction(watch());
    getFinancialEvolution({ year: dayjs().year() });
  }, [getTransaction, getFinancialEvolution]);

  console.log(financialEvolution);

  const handleSelectCategory = useCallback(
    async ({ _id, title, color }: Category) => {
      setSelectedCategory({
        _id,
        title,
        color,
      });

      setValue('categoryId', _id);

      await getTransaction(watch());
    },
    [setValue, getTransaction],
  );

  const handleClearCategory = useCallback(async () => {
    setSelectedCategory(null);
    setValue('categoryId', undefined);

    await getTransaction(watch());
  }, [setValue]);

  useEffect(() => {
    setSelectedCategory(null);
    setValue('categoryId', undefined);
  }, [setValue]);

  const onSubmit = useCallback(
    async (data: TransactionParams) => {
      await getTransaction(data);
    },
    [getTransaction],
  );

  const items: Item[] = [
    {
      title: 'Saldo',
      value: dashboard?.balance?.balance || 0,
      icon: (
        <PiCurrencyCircleDollar fontSize="2.1rem" color={theme.colors.info} />
      ),
      variant: 'balance',
    },
    {
      title: 'Receitas',
      value: dashboard?.balance?.incomes || 0,
      icon: (
        <BsArrowUpRightCircle fontSize="1.8rem" color={theme.colors.primary} />
      ),
      variant: 'income',
    },
    {
      title: 'Despesas',
      value: dashboard?.balance?.expenses * -1 || 0,
      icon: (
        <BsArrowDownLeftCircle fontSize="1.8rem" color={theme.colors.error} />
      ),
      variant: 'expense',
    },
  ];

  return (
    <>
      <FormProvider {...methods}>
        <Header padding>
          <Logo />

          <Spacer>
            <CreateTransactionDialog />
            <CreateCategoryDialog />
          </Spacer>
        </Header>

        <Main>
          <Section>
            <Filters>
              <Title title="Saldo" subtitle="Receitas e despesas no período" />

              <InputGroup>
                <InputMask
                  name="startDate"
                  label="Início"
                  component={Input}
                  mask="dd/mm/aaaa"
                  replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                  placeholder="dd/mm/aaaa"
                />
                <InputMask
                  name="endDate"
                  label="Fim"
                  component={Input}
                  mask="dd/mm/aaaa"
                  replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                  placeholder="dd/mm/aaaa"
                />

                <ButtonIcon onClick={handleSubmit(onSubmit)}>
                  <IoIosSearch fontSize="1.25rem" />
                </ButtonIcon>
              </InputGroup>
            </Filters>

            <Spacer width="100%" gap="0.75rem">
              {items.map((item) => (
                <CardBalance
                  key={item.title}
                  title={item.title}
                  value={item.value}
                  icon={item.icon}
                  variant={item.variant}
                />
              ))}
            </Spacer>
            <ChartContainer>
              <Header>
                <Title
                  title="Gráfico"
                  subtitle="Receitas e despesas no período"
                />

                {selectedCategory && (
                  <CategoryBadge
                    $color={selectedCategory.color}
                    onClick={handleClearCategory}
                  >
                    <IoIosClose
                      fontSize="1.25rem"
                      color={selectedCategory.color}
                    />

                    {selectedCategory.title.toUpperCase()}
                  </CategoryBadge>
                )}
              </Header>
              <ChartContent>
                <CategoriesPieChart
                  expenses={dashboard.expenses}
                  onClick={handleSelectCategory}
                />
              </ChartContent>
            </ChartContainer>

            <ChartContainer>
              <Header>
                <Title
                  title="Evolução financeira"
                  subtitle="Saldo, Receitas e Gastos no ano"
                />

                <ChartFilter>
                  <InputMask
                    name="year"
                    label="Ano"
                    component={Input}
                    mask="aaaa"
                    replacement={{ a: /\d/ }}
                    placeholder="aaaa"
                    variant="black"
                  />
                  <ButtonIcon onClick={handleSubmit(onSubmit)}>
                    <IoIosSearch fontSize="1.25rem" />
                  </ButtonIcon>
                </ChartFilter>
              </Header>
              <ChartContent>
                <FinancesBarChart financialEvolution={financialEvolution} />
              </ChartContent>
            </ChartContainer>
          </Section>
          <Aside>
            <Header>
              <Title
                title="Evolução financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />
            </Header>

            <Row>
              <Input
                name="title"
                placeholder="Procurar transação..."
                variant="black"
                style={{ width: '90%' }}
              />
              <ButtonIcon onClick={handleSubmit(onSubmit)}>
                <IoIosSearch fontSize="1.25rem" />
              </ButtonIcon>
            </Row>

            {transactions?.length &&
              transactions.map((transaction, index) => (
                <Transaction
                  key={transaction._id}
                  id={index + 1}
                  title={transaction.title}
                  date={dayjs(transaction.date).format('DD/MM/YYYY')}
                  amount={
                    transaction.type === 'expense'
                      ? transaction.amount * -1
                      : transaction.amount
                  }
                  category={{
                    title: transaction.category.title,
                    color: transaction.category.color,
                  }}
                  variant={transaction.type}
                />
              ))}
          </Aside>
        </Main>
      </FormProvider>
    </>
  );
}
