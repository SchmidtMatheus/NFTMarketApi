import React, { useState } from 'react';
import * as Styled from './styles';

import { Link } from 'react-router-dom';
import { Field } from '../Field';
import { Context } from '../../context/UserContext';
import { useContext } from 'react';

export const Form = () => {
    const [user, setUser] = useState({});
    const { register } = useContext(Context);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register(user);
    }

    return (
        <Styled.Container>
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit}>
                <Field text="Nome" type="text" name="name" placeholder="Informe seu nome" handleOnChange={handleChange} />
                <Field text="Sorenome" type="text" name="lastname" placeholder="Informe seu sobrenome" handleOnChange={handleChange} />
                <Field text="Email" type="email" name="email" placeholder="Informe seu e-mail" handleOnChange={handleChange} />
                <Field text="Senha" type="password" name="password" placeholder="Informe a senha" handleOnChange={handleChange} />
                <Field text="Confirmação de Senha" type="password" name="confirmPassword" placeholder="Confirme a senha" handleOnChange={handleChange} />
                <input type="submit" value="Cadastrar" />
            </form>
            <p>Já possui cadastro? <Link to="/login">Login</Link></p>
        </Styled.Container>
    );
};
