import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 7.25rem;
  border-radius: 0.25rem;
  border: 0;
  padding: 0;
  transition: all 0.4s;
  background-color: ${theme.colors.primary};

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;
