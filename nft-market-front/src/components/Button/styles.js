import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${() => css`
    min-width: 10rem;
    background: rgba(39, 174, 245, 0.8);
    padding: 15px 30px;
    border-radius: 8px;
    color: #212529;
    cursor: pointer;
    transition: transform 100ms ease-in-out;

    &:disabled {
      background: #888;
      cursor: not-allowed;
    }

    &:hover {
      transform: scale(1.03);
    }
  `}
`;