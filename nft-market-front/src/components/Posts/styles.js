import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    max-width: 80rem;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 1rem;
    gap: 30px;

    h2{
      color: rgba(39, 174, 245, 0.8);
    }

    h3{
      color: greenyellow;
    }
  `}
`;
