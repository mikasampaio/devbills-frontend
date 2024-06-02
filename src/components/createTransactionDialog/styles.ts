import { InputNumberFormat } from '@react-input/number-format';
import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  footer {
    display: flex;
    justify-content: flex-end;

    align-items: center;
    gap: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;

  label {
    color: ${theme.colors.white};
    font-size: 0.75rem;
  }

  select {
    height: 2.25rem;
    background-color: ${theme.colors.black};
    border: 0;
    border-radius: 0.25rem;
    padding: 0 0.75rem;
    color: ${theme.colors.neutral};
    font-size: 1rem;
    width: 100%;
    border: 1px solid transparent;
    transition: all 0.1ms;
    cursor: pointer;

    &:focus {
      border-color: ${theme.colors.primary};
    }
  }

  span {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    color: #f87171;
  }
`;

export const CurrencyInput = styled(InputNumberFormat)`
  height: 2.25rem;
  background-color: ${theme.colors.black};
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
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  justify-content: center;

  label {
    color: ${theme.colors.white};
    font-size: 0.9rem;
  }

  input {
    width: 1rem;
    height: 1rem;
    accent-color: ${theme.colors.primary};
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    color: #f87171;
  }
`;
