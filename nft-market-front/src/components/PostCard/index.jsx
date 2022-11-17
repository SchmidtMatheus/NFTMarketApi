import * as Styled from './styles';

export const PostCard = ({ cover, title, body, price }) => {
  return (
    <Styled.Container>
      <img src={cover} alt={title} />
      <Styled.PostContent>
        <h2>
          {title}
        </h2>
        <p>{body}</p>
        <h3>{price}</h3>
      </Styled.PostContent>
    </Styled.Container>
  );
};