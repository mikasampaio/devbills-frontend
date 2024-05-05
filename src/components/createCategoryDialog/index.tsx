import { useState } from 'react';

import Button from '../button';
import Dialog from '../dialog';
import { Input } from '../input';
import Title from '../title';
import { Container } from './styles';

export default function CreateCategoryDialog() {
  const [open, setOpen] = useState(false);

  const onSubmit = () => {};

  return (
    <Dialog
      trigger={<Button variant="outline">Nova Categoria</Button>}
      isOpen={open}
      onOpenChange={setOpen}
    >
      <Container>
        <Title
          title="Nova categoria"
          subtitle="Crie uma nova categoria para suas transações"
        />

        <form>
          <div>
            <Input
              label="Nome"
              type="text"
              placeholder="Nome da categoria"
              variant="black"
            />

            <Input
              label="Cor"
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
            <Button onClick={onSubmit}>Cadastrar</Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
