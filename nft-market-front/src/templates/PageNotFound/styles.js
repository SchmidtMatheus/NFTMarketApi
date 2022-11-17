import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    height: 86vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
      color: rgba(39, 174, 245, 0.8);
    }
    div {
      font-size: 4rem;
      color: rgba(39, 174, 245, 0.8);
    }
  `}
`;