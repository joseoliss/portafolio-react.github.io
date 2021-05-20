import React, { StrictMode } from 'react'
import './Proyectos.css'
import proyectos from '../data/proyectos.json'

export default function Proyectos() {

    return (
        <StrictMode>
            <div className="contenedor">
                {
                    proyectos.map((pro) => {
                        return (
                            <div key={pro.Img} className="componente">
                                <h3>{pro.Nombre}</h3>
                                <p>{pro.Descripcion}</p>
                                <img src={pro.Img} alt="x" />
                                <a href={pro.Url} className="btn-link" target="_blank" rel="noreferrer">Ver código</a>
                            </div>
                        )

                    })
                }
            </div>
        </StrictMode>
    )
}