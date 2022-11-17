import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${() => css`
    max-width: 300px;
    margin: 0 auto;
    background-color: #FFF;
    border-radius: 15px;
    background: transparent;

    input[type='submit']{
      border-radius 8px;
      background-color: #25B456;
      color: #FFF;
      border: none;
      min-width: 100px;
      min-height: 2.5em;
      width: 100%;
      cursor: pointer;
      font-size: 1.1em;
      font-weight: bold; 
    }

    input[type='submit']:hover{
      background-color: #1C8A42;
    }
    
    p{
      margin-top: 1em;
    }

    p a{
      color: #16479d;
      font-weight: bold;
    }
  `}
`;
