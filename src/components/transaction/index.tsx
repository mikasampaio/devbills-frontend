import { formatCurrency } from '../../utils/formatCurrency';
import { Container, Info, Content } from './styles';

type TransactionProps = {
  id: string;
  title: string;
  date: string;
  amount: number;
  category: {
    title: string;
    color: string;
  };
  variant?: 'income' | 'expense';
};

export default function Transaction({
  id,
  title,
  date,
  amount,
  category,
  variant = 'income',
}: TransactionProps) {
  return (
    <Container>
      <Info>
        <p>#{id.toString().padStart(4, '0')}</p>
        <div>
          <strong>{title}</strong>
          <span>{date}</span>
        </div>
      </Info>

      <Content $variant={variant} $tagColor={category.color}>
        <strong>{formatCurrency(amount)}</strong>
        <span>{category.title.toUpperCase()}</span>
      </Content>
    </Container>
  );
}
