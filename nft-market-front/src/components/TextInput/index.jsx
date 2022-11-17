import * as Styled from './styles';

export const TextInputSearch = ({ searchValue, handleChange, placeholder }) => {
  return (
    <Styled.Container>
      <input type="text" value={searchValue} onChange={handleChange} placeholder={placeholder} />
    </Styled.Container>
  );
};