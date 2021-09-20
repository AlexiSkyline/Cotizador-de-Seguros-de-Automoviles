import styled from '@emotion/styled';
import React from 'react'
import { primeraMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin: 1rem;
`;
export const Resumen = ({ datos }) => {
    
    // TODO extrae datos
    const { marca, year, plan } = datos;
    
    if( marca === '' || year === '' || plan === '' ) return null;

    return (
        <ContenedorResumen>
            <h1>Resumen de Cotización</h1>
            <ul>
                <li>Marca: ${ primeraMayuscula( marca ) } </li>
                <li>Plan: ${ primeraMayuscula( plan ) } </li>
                <li>Año del Auto: ${ year } </li>
            </ul>
        </ContenedorResumen>
    )
}
