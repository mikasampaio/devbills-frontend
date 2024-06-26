import styled from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'black' | 'dark';
  width?: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  width: ${(props) => (props.width ? '90%' : 'auto')};

  label {
    color: ${theme.colors.white};
    font-size: 0.75rem;
  }

  input {
    height: 2.25rem;
    background-color: ${(props) => theme.colors[props.$variant]};
    border: 0;
    border-radius: 0.25rem;
    padding: 0 0.75rem;
    color: ${theme.colors.neutral};
    font-size: 1rem;
    width: 100%;
    border: 1px solid transparent;
    transition: all 0.1ms;

    &:focus {
      border-color: ${theme.colors.primary};
    }

    &::placeholder {
      color: ${theme.colors.neutral};
    }
  }

  span {
    color: #f87171;
    font-size: 0.75rem;
  }
`;
