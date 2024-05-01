import styled from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'balance' | 'income' | 'expense';
};

const variantColor = {
  balance: theme.colors.info,
  income: theme.colors.success,
  expense: theme.colors.error,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;
  padding: 1rem;
  width: 100%;

  span {
    color: ${theme.colors.neutral};
    font-size: 1rem;
    font-weight: 400;
  }

  strong {
    font-size: 1.5rem;
    color: ${(props) => variantColor[props.$variant]};
  }
`;

export const Icon = styled.span<ContainerProps>`
  color: ${(props) => variantColor[props.$variant]};
`;
