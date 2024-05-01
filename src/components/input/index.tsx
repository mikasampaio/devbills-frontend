import { ComponentProps, forwardRef } from 'react';

import { Container } from './styles';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  variant?: 'black' | 'dark';
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, variant = 'dark', ...props },
  ref,
) {
  return (
    <Container $variant={variant}>
      {label && <label htmlFor="">{label}</label>}
      <input ref={ref} {...props} />
    </Container>
  );
});