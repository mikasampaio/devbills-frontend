import { ComponentProps, forwardRef } from 'react';

import { Container } from './styles';

type ButtonProps = ComponentProps<'button'>;

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { children, ...props },
  ref,
) {
  return (
    <Container ref={ref} {...props}>
      {children}
    </Container>
  );
});
