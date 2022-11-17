import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${() => css`
    display: flex;
    justify-content: space-between;
    padding: 1em 1.5em;
    background: rgba(33,37,41,0.73);
    color: white;

    ul{
        display: flex;
        align-items: center;
        list-style: none;
    }

    li, a{
        text-decoration: none;
        font-weight: bold;
        cursor: pointer;
        transition: .5s;
        padding: .5em .8em;
        border-radius: 5px;
        color: white;
        background: transparent;
    }

    li:hover {
      background: rgba(39, 174, 245, 0.8);;
    }
  `}
`;

export const Logo = styled.div`
  ${() => css`
    display: flex;
    align-items: center;

    img{
        width: 10rem;
        margin-right: 0.8em;
    }
  `}
`;