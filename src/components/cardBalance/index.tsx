import { BsArrowDownLeftCircle, BsArrowUpRightCircle } from 'react-icons/bs';
import { PiCurrencyCircleDollar } from 'react-icons/pi';

import { formatCurrency } from '../../utils/formatCurrency';
import { Container, Icon } from './styles';

type CardProps = {
  title: string;
  value: number;
  icon?: React.ReactNode;
  variant?: 'balance' | 'income' | 'expense';
};

const iconsMap = {
  balance: <PiCurrencyCircleDollar />,
  income: <BsArrowUpRightCircle />,
  expense: <BsArrowDownLeftCircle />,
};

export function CardBalance({
  title,
  value,
  variant = 'balance',
  icon,
}: CardProps) {
  return (
    <Container $variant={variant}>
      <Icon $variant={variant}>{icon}</Icon>
      <span>{title}</span>
      <strong>{formatCurrency(value)}</strong>
    </Container>
  );
}
