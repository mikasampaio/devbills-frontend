import { useState } from 'react';

import Button from '../button';
import Dialog from '../dialog';
import { Input } from '../input';
import Title from '../title';
import { Container } from './styles';

export default function CreateTransactionDialog() {
  const [open, setOpen] = useState(false);

  const onSubmit = () => {};

  return (
    <Dialog
      trigger={<Button>Nova Transação</Button>}
      isOpen={open}
      onOpenChange={setOpen}
    >
      <Container>
        <Title
          title="Nova transação"
          subtitle="Crie uma nova transação para seu controle financeiro"
        />

        <form>
          <div>
            <Input
              type="text"
              placeholder="Nome da categoria"
              variant="black"
            />

            <Input
              type="color"
              placeholder="Cor da categoria"
              variant="black"
            />
          </div>
          <footer>
            <Button
              variant="outline"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button variant="outline" onClick={onSubmit}>
              Cadastrar
            </Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
