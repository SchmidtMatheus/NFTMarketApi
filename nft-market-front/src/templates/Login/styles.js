import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    min-height: 86vh;
    background: #212529;
    padding-top: 1em;
    color: white;

    p{
        font-weight: bold;
        margin-top: 1em;
        color: #16479d;
    }
    
    h1{
        margin-bottom: 1.5em;
    }
  `}
`;