import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: solid 1px white;
    transition: transform 100ms ease-in-out;
    max-width: 14rem;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }

    img {
      max-width: 100%;
      border-radius: 5px;
    }
  `}
`;

export const PostContent = styled.div`
  ${() => css`
    padding: 30px;
  `}
`;
