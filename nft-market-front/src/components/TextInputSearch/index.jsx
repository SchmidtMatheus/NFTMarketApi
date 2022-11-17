import * as Styled from './styles';
import { FiSearch } from 'react-icons/fi';

export const TextInputSearch = ({ searchValue, handleChange, onClick }) => {
  return (
    <Styled.Container>
      <input type="text" value={searchValue} onChange={handleChange} placeholder="Pesquise por nome" />
      <Styled.ButtonSearch>
        <FiSearch size={25} color="#ffffff" onClick={onClick} />
      </Styled.ButtonSearch>
    </Styled.Container>
  );
};