import { InputMask } from '@react-input/mask';
import { useState } from 'react';

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
          <Content>
            <InputGroup>
              <label>Categoria</label>
              <select>
                <option value="1">Selecione uma categoria...</option>
              </select>
            </InputGroup>
            <Input
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
              />
            </InputGroup>

            <InputMask
              label="Início"
              component={Input}
              mask="dd/mm/aaaa"
              replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
              placeholder="dd/mm/aaaa"
              variant="black"
            />

            <RadioGroup>
              <div>
                <input type="radio" name="type" id="income" />
                <label htmlFor="income">Receita</label>
              </div>
              <div>
                <input type="radio" name="type" id="expense" />
                <label htmlFor="expense">Despesa</label>
              </div>
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
            <Button onClick={onSubmit}>Cadastrar</Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
