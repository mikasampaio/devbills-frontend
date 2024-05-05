import { InputMask } from '@react-input/mask';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { BsArrowDownLeftCircle } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { PiCurrencyCircleDollar } from 'react-icons/pi';

import Button from '../../components/button';
import { ButtonIcon } from '../../components/button-icon';
import { CardBalance } from '../../components/cardBalance';
import CreateCategoryDialog from '../../components/createCategoryDialog';
import CreateTransactionDialog from '../../components/createTransactionDialog';
import { Input } from '../../components/input';
import Title from '../../components/title';
import Transaction from '../../components/transaction';
import Logo from '../../images/logo';
import { theme } from '../../styles/theme';
import {
  Aside,
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
  const items: Item[] = [
    {
      title: 'Saldo',
      value: 10000,
      icon: (
        <PiCurrencyCircleDollar fontSize="2.1rem" color={theme.colors.info} />
      ),
    },
    {
      title: 'Receitas',
      value: 100000,
      icon: (
        <BsArrowUpRightCircle fontSize="1.8rem" color={theme.colors.primary} />
      ),
      variant: 'income',
    },
    {
      title: 'Despesas',
      value: 100000,
      icon: (
        <BsArrowDownLeftCircle fontSize="1.8rem" color={theme.colors.error} />
      ),
      variant: 'expense',
    },
  ];
  return (
    <>
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
                label="Início"
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                label="Fim"
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                placeholder="dd/mm/aaaa"
              />

              <ButtonIcon>
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
            </Header>
            <ChartContent></ChartContent>
          </ChartContainer>

          <ChartContainer>
            <Header>
              <Title
                title="Evolução financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />

              <ChartFilter>
                <InputMask
                  label="Ano"
                  component={Input}
                  mask="dd/mm/aaaa"
                  replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                  placeholder="dd/mm/aaaa"
                  variant="black"
                />
                <ButtonIcon>
                  <IoIosSearch fontSize="1.25rem" />
                </ButtonIcon>
              </ChartFilter>
            </Header>
            <ChartContent></ChartContent>
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
            <Input placeholder="Procurar transação..." variant="black" width />
            <ButtonIcon>
              <IoIosSearch fontSize="1.25rem" />
            </ButtonIcon>
          </Row>

          <Transaction
            id="1"
            title="Mercado"
            date="21/02/2024"
            amount={2500}
            category={{ title: 'Alimentação', color: '#0cc0ec' }}
          />
        </Aside>
      </Main>
    </>
  );
}
