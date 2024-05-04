import styled from 'styled-components';

import { theme } from '../../styles/theme';

type TransactionProps = {
  $variant: 'income' | 'expense';
  $tagColor: string;
};

const variantMap = {
  income: theme.colors.success,
  expense: theme.colors.error,
};

export const Container = styled.div`
  padding: 0.75rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    height: 1px;
    width: 5%;
    background-color: ${theme.colors.neutral};
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 0.625rem;

  p {
    color: ${theme.colors.neutral};
    font-size: 0.75rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;

    strong {
      color: ${theme.colors.light};
      font-size: 1rem;
      font-weight: 500;
    }

    span {
      color: ${theme.colors.neutral};
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`;

export const Content = styled.div<TransactionProps>`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 0.375rem;

  strong {
    color: ${(props) => variantMap[props.$variant]};
    font-size: 0.875rem;
    font-weight: 700;
  }

  span {
    display: flex;
    justify-content: center;
    font-size: 0.625rem;
    font-weight: 400;
    color: ${(props) => props.$tagColor};
    border: 1px solid ${(props) => props.$tagColor};
    padding: 0.25rem;
    border-radius: 0.125rem;
  }
`;
