import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > div {
      display: grid;
      grid-template-columns: 80% auto;
      grid-gap: 0.5rem;
    }
  }

  footer {
    display: flex;
    justify-content: flex-end;

    align-items: center;
    gap: 0.5rem;
  }
`;
