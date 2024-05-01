import { InputMask } from '@react-input/mask';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import { BsArrowDownLeftCircle } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';
import { PiCurrencyCircleDollar } from 'react-icons/pi';

import Button from '../../components/button';
import { ButtonIcon } from '../../components/button-icon';
import { CardBalance } from '../../components/cardBalance';
import { Input } from '../../components/input';
import Title from '../../components/title';
import Logo from '../../images/logo';
import { theme } from '../../styles/theme';
import { Header, Main, Section, Spacer } from './styles';
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
      <Header>
        <Logo />

        <Spacer>
          <Button>Nova Transação</Button>
          <Button variant="outline">Nova Categoria</Button>
        </Spacer>
      </Header>

      <Main align="flex-end">
        <Section>
          <Title title="Saldo" subtitle="Receitas e despesas no período" />
        </Section>

        <InputMask
          label="Início"
          component={Input}
          mask="dd/mm/yyyy"
          replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
          placeholder="dd/mm/yyyy"
        />
        <InputMask
          label="Fim"
          component={Input}
          mask="dd/mm/yyyy"
          replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
          placeholder="dd/mm/yyyy"
        />

        <ButtonIcon>
          <IoIosSearch fontSize="1.25rem" />
        </ButtonIcon>
      </Main>

      <Main>
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
      </Main>
    </>
  );
}
