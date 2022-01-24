import React from 'react';
import './Participantes.css';
import Participante from "./Participante";

const Participantes = ({ participantes }) => {
    return(
        <div className="participantes-lista">
            {participantes.map((participante) => (
                <Participante 
                    key={participante.organizationName}
                    participante={participante}
                />
            ))}
        </div>
    )
}

export default Participantes;