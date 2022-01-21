import React from 'react';
import './Participante.css';

const Participante = ({ participante }) => {
    return(
        <div className="participante-container">
            <details className="participante-nome">
                <summary className="sumario">{participante.organizationName}</summary>
                <ul className="dados-participante">
                    <li className="logo"><img src={participante.customerFriendlyLogoUri} alt="Logo" /></li>
                    <li className="nome"><b><i>Nome do Servidor de Autenticação:</i></b>   {participante.customerFriendlyName}</li>
                    <li className="link"><b><i>URL do Servidor de Autenticação:</i></b> <a href={participante.url_server}>   {participante.url_server}</a></li>
                </ul>
            </details>
        </div>
    )
}

export default Participante;