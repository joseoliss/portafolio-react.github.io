import React, { StrictMode } from 'react'
import './Conocimiento.css'
import conocimientos from '../data/conocimientos.json'

export default function Conocimientos() {

    return (
        <StrictMode>
            <div className="contenedor-conocimiento">
                {
                    conocimientos.map((pro) => {
                        return (
                            <div className="div-conocimiento" key={pro.Img}>
                                <h3>{pro.Nombre}</h3>
                                <p>{pro.Descripcion}</p>
                                <img src={pro.Img} alt="x" />
                            </div>
                        )

                    })
                }
            </div>
        </StrictMode >
    )
}