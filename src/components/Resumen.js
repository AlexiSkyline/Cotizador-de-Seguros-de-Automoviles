import React from 'react'

export const Resumen = ({ datos }) => {
    
    // TODO extrae datos
    const { marca, year, plan } = datos;
    
    if( marca === '' || year === '' || plan === '' ) return null;

    return (
        <>
            <h1>Resumen de Cotización</h1>
            <ul>
                <li>Marca: </li>
                <li>Plan: </li>
                <li>Año del Auto: </li>
            </ul>
        </>
    )
}
