import React, { useState } from 'react';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/api';
import useFlashMessage from '../../hooks/useFlashMessage';
import { NftForm } from '../../components/NftForm';

export const Cadastro = () => {
    const [token] = useState(localStorage.getItem('token') || '');
    const { setFlashMessage } = useFlashMessage();
    const navigate = useNavigate();
    const register = async (nft) => {
        let msgType = "success";
        const data = await api.post("/nft/create", nft, { headers: { 'Authorization': `Bearer ${JSON.parse(token)}` } })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                msgType = 'error';
                return err.response.data;
            })

        setFlashMessage(data.message, msgType);
        if (msgType !== 'error') {
            navigate("/listar");
        }
    }
    return (
        <Styled.Container>
            <h1>Cadastrar uma nft</h1>
            <p>Depois ela ficará disponível na loja.</p>
            <NftForm handleSubmit={register} />
        </Styled.Container>
    );
};
