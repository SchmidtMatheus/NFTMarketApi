import * as Styled from './styles';

export const Button = ({ text, onClick, disabled = false }) => {
  return (
    <Styled.Container onClick={onClick} disabled={disabled} >
      {text}
    </Styled.Container>
  );
};
