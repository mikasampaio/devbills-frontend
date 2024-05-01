import styled from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant?: 'default' | 'outline';
};

export const Button = styled.button<ContainerProps>`
  height: 2.25rem;
  background-color: ${(props) =>
    props.$variant === 'default' ? theme.colors.primary : 'transparent'};
  border: ${(props) =>
    props.$variant === 'outline'
      ? `1px solid ${theme.colors.primary}`
      : 'none'};
  border-radius: 0.25rem;
  color: ${(props) => props.$variant === 'outline' && theme.colors.primary};

  font-size: 1rem;
  font-weight: 400;
  padding: 0 0.75rem;
  transition: all 0.4s;

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;
