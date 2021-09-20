import styled from '@emotion/styled'
import React from 'react'

const Mensaje = styled.p`
    background-color: rgb( 127, 225, 237 );
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgba( 127, 224, 237 );
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

export const Resultado = ({ cotizacion }) => {
    
    return (
        ( cotizacion === 0 ) 
            ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
            : ( 
                <ResultadoCotizacion>
                    <TextoCotizacion>El total es: $ { cotizacion } </TextoCotizacion> 
                </ResultadoCotizacion>
              )
    );
};
