import styled from 'styled-components';

type ComponentProps = {
  gap?: string | number;
};

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Spacer = styled.span<ComponentProps>`
  display: flex;
  gap: ${(props) => props.gap || '10px'};
`;
