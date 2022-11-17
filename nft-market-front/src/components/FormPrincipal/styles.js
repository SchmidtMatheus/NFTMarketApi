import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    .flutuante{
      animation: ${float} 5s ease-in-out infinite;
    }
  `}
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;