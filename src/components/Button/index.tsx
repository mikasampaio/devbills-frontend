import { ComponentProps } from 'react';

import { Button as ButtonContainer } from './styles';

type ButtonProps = ComponentProps<'button'> & {
  children: string;
  variant?: 'default' | 'outline';
};

export default function Button({
  children,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer $variant={variant} {...props}>
      {children}
    </ButtonContainer>
  );
}
