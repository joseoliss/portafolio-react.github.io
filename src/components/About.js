import React, { StrictMode } from 'react'
import './About.css';
import { Link } from 'react-scroll'
import pc from '../img/pc.png'
import abaut from '../img/abaut.png'
import autodidacta from '../img/How-to-Learn-Programming.png'

export default function About() {

    return (
        <StrictMode>
            <div className="p-b">
                <div className="div">
                    <div className="izquierda">
                        <h1>José Andrés Solís</h1>
                        <h3>Software Developer</h3>
                        <div >
                            <Link
                                className="btn-sobreMi"
                                activeClass="active"
                                to="estudios"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={1000}
                            >
                                Comencemos
                        </Link>
                        </div>
                    </div>
                    <div className="derecha">
                        <img alt="x" src={pc} />
                    </div>
                </div>
                <section id="estudios" className="estudios">
                    <div className="estudioIzquierda">
                        <img alt="x" src={abaut}></img>
                    </div>
                    <div className="texto">
                        <h3>Sobre mi</h3>
                        <p>
                            Estudiante de ingeniería en sistemas en la universidad americana, estoy por terminar el bachillerato,
                            me gustaría poder entrar a formar parte de una empresa en la que poder aplicar todos mis conocimientos y
                            habilidades y, al mismo tiempo, que me permita desarrollarme profesionalmente. Soy una persona proactiva,
                            me gustan los retos y siempre estoy en constante aprendizaje para mejorar día a día.
                </p>
                        <h3>Educación</h3>
                        <p>
                            Bachiller en Ingeniería de Sistemas
                            Universidad Americana
                            (2017 – Actual)
                </p>
                        <p>
                            Bachiller en Educación media
                            CTP San Juan Sur
                            (2016)
                </p>
                    </div>

                </section>

                <section className="estudios">

                    <div className="texto">
                        <h3>Autodidacta</h3>
                        <p>
                            Me considero una persona autodidacta, ya que la mayoría de las cosas que sé acerca de
                            programación, tanto de front-end como back-end las he aprendido solo, siempre que puedo me
                            gusta aprender cosas nuevas. Soy una persona organizada, me gusta que las cosas se hagan
                            bien, por eso siempre trato de estar claro sobre problema antes de solucionarlo.
                        </p>

                    </div>
                    <div className="imgDerecha2">
                        <img alt="x" src={autodidacta}></img>
                    </div>
                </section>
            </div>
        </StrictMode>
    )
};

