import React, { useState } from 'react';
import * as Styled from './styles';

import { Field } from '../Field';

export const NftForm = ({ handleSubmit }) => {
    const [nft, setNft] = useState({});

    const handleChange = (e) => {
        setNft({ ...nft, [e.target.name]: e.target.value });
    };

    const handleNumberChange = (e) => {
        if (e.target.value <= 0) {
            e.target.value = 0;
        }
        setNft({ ...nft, price: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(nft);
    }

    return (
        <Styled.Container>
            <form onSubmit={submit}>
                <Field text="Nome" type="text" name="title" placeholder="Nome" handleOnChange={handleChange} />
                <Field text="Descrição" type="text" name="description" placeholder="Descrição" handleOnChange={handleChange} />
                <Field text="Preço" type="number" name="price" placeholder="Preço" handleOnChange={handleNumberChange} step="0.01" />
                <Field text="Link da imagem" type="text" name="imageUrl" placeholder="Link da imagem" handleOnChange={handleChange} />
                <input type="submit" value="Enviar" />
            </form>
        </Styled.Container>
    );
};
