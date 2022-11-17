import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    min-height: 86vh;
    padding: 1em 2em 3em;
    margin: 0 auto;
    background: #212529;
    color: white;

    h1{
      margin-top: 1em;
      font-size: 2em;
    }
  `}
`;
