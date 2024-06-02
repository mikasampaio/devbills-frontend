import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { useCategory } from '../../hooks/category-context';
import {
  CreateCategorySchema,
  createCategorySchema,
} from '../../schemas/CategorySchema';
import { CreateCategory } from '../../services/category-requests';
import { theme } from '../../styles/theme';
import Button from '../button';
import Dialog from '../dialog';
import { Input } from '../input';
import Title from '../title';
import { Container } from './styles';

export default function CreateCategoryDialog() {
  const [open, setOpen] = useState(false);
  const { createCategory, fetchCategory } = useCategory();
  const methods = useForm<CreateCategorySchema>({
    resolver: zodResolver(createCategorySchema),
  });

  const { handleSubmit, setValue } = methods;

  const onSubmit = async (data: CreateCategory) => {
    try {
      await createCategory(data);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setValue('title', ''), setValue('color', '');
  }, [setValue, open]);

  return (
    <Dialog
      trigger={<Button variant="outline">Nova Categoria</Button>}
      isOpen={open}
      onOpenChange={setOpen}
    >
      <FormProvider {...methods}>
        <Container>
          <Title
            title="Nova categoria"
            subtitle="Crie uma nova categoria para suas transações"
          />

          <form>
            <div>
              <Input
                name="title"
                label="Nome"
                type="text"
                placeholder="Nome da categoria"
                variant="black"
              />

              <Input
                name="color"
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
              <Button onClick={handleSubmit(onSubmit)}>Cadastrar</Button>
            </footer>
          </form>
        </Container>
      </FormProvider>
    </Dialog>
  );
}
