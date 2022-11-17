import * as Styled from './styles';
import imagemLogo from '../../logo/nFt.png';

export const FormPrincipal = () => {
  return (
    <Styled.Container>
      <img src={imagemLogo} alt="logo" className="flutuante" />
    </Styled.Container>
  );
}
