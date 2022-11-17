import React from 'react';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <Styled.Container>
            <div>
                Página Não encontrada
            </div>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </Styled.Container>
    );
};