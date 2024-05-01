import { Container } from './styles';

type TitleProps = {
  title: string;
  subtitle?: string;
};

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </Container>
  );
}
