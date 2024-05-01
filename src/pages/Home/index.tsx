import Button from '../../components/Button';
import Logo from '../../images/logo';
import { Header, Spacer } from './styles';

export function App() {
  return (
    <>
      <Header>
        <Logo />

        <Spacer>
          <Button>Nova Transação</Button>
          <Button variant="outline">Nova Categoria</Button>
        </Spacer>
      </Header>
    </>
  );
}
