import styled from 'styled-components';

type ComponentProps = {
  gap?: string | number;
  align?: 'center' | 'flex-start' | 'flex-end';
  width?: string | number;
};

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Spacer = styled.span<ComponentProps>`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  gap: ${(props) => props.gap || '10px'};
  width: ${(props) => props.width};
`;

export const Main = styled.main<ComponentProps>`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
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
  justify-content: center;
  width: 100%;
`;
