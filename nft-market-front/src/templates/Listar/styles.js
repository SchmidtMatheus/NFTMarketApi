import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    min-height: 86vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212529;
    flex-direction: column;

    p#semPosts{
      color: rgba(39, 174, 245, 0.8);
    }
  `}
`;

export const Button = styled.div`
  ${() => css`
    display: flex;
    align-items: flex-end;
  `}
`;

export const NotFound = styled.div`
  ${() => css`
    color: white;
  `}
`;
