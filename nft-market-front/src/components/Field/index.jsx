import * as Styled from './styles';

export const Field = ({ type, text, name, placeholder, handleOnChange, value, step, pattern }) => {
  return (
    <Styled.Container>
      <label htmlFor={name} >{text}:</label>
      <input type={type} name={name} placeholder={placeholder} onChange={handleOnChange} value={value} step={step} pattern={pattern} />
    </Styled.Container>
  );
};