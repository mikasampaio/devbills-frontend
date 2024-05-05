import styled from 'styled-components';

import { theme } from '../../styles/theme';

type ComponentProps = {
  gap?: string | number;
  align?: 'center' | 'flex-start' | 'flex-end';
  width?: string | number;
  padding?: boolean;
};

export const Header = styled.header<ComponentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.padding && '1.5rem'};
`;

export const Spacer = styled.span<ComponentProps>`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  gap: ${(props) => props.gap || '10px'};
  width: ${(props) => props.width};
`;

export const Main = styled.main<ComponentProps>`
  display: flex;
  /* align-items: ${(props) => props.align || 'center'}; */
  gap: 0.75rem;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 31.25rem;
  width: 100%;
  gap: 0.5rem;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;
`;

export const ChartContent = styled.div`
  height: 16rem;
`;

export const ChartFilter = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${theme.colors.dark};
  min-width: 22.5rem;
`;

export const Row = styled.div`
  display: flex;
  gap: 0.75rem;
`;
