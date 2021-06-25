import React, { Component, useState } from 'react'
import api from '../../services/apiNewsLetter'
import * as Yup from 'yup';
import * as S from './surveySubscription';

const schema = Yup.object().shape({
    name: Yup.string()
        .required('Preencha com seu nome completo'),
    email: Yup.string()
        .email('Preencha com um e-mail válido')
        .required('E-mail é obrigatório'),
});

const SurveySubscription = () => {
    const [success, setSucess] = useState('');

    async function formSubmit(data) {
        const response = await api.post('', data);
        
        if (response.data.message === 'Created successfully') {
            setSucess('Email Cadastrado com Sucesso!');
        }
    }

    return (
        <S.Container>
            <h2>Participe de nossa newsletter com promoções e novidades!</h2>
            <h5>{ success }</h5>
            <form schema={schema} onSubmit={formSubmit}>
                <S.Input>
                    <input name="name" type="text" placeholder="Digite seu nome"/>
                </S.Input>
                <S.Input>
                    <input name="email" type="text" placeholder="Digite seu E-mail"/>
                </S.Input>
                <S.Button type="submit">Eu quero!</S.Button>
            </form>
        </S.Container>
    );
};

export default SurveySubscription;