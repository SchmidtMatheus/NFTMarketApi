import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    background: rgba(255, 255, 255, 0.2);
    padding: 10px;
    margin: 20px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);

    input {
      background: transparent;
      border: 0;
      font-size: 20px;
      color: #fff;
      outline: none;
      margin-right: 8px;

      &:hover {
        color: #f1f1f1;
      }
    }
  `}
`;
