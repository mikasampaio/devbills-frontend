import { ComponentProps, forwardRef } from 'react';

import { Container } from './styles';

type InputProps = ComponentProps<'input'> & {
  label?: string;
  variant?: 'black' | 'dark';
  width?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function (
  { label, variant = 'dark', width = false, ...props },
  ref,
) {
  return (
    <Container $variant={variant} width={width}>
      {label && <label htmlFor="">{label}</label>}
      <input ref={ref} {...props} />
    </Container>
  );
});
