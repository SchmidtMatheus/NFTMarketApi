import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    text-align: center;
    background: #212529;
    padding-top: 1em;
    color: white;
    min-height: 86vh;

    h1{
      margin-bottom: 0.2em;
    }

    p{
      margin-bottom: 6em;
    }
  `}
`;