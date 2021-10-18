import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { SkipButton } from '../components';

function Intro() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setIntro(false), window.screen.width > 680 ? 50000 : 53000)
  }, [])

  const handleClick = () => {
    setIntro(false);
  }

  if (!intro) return <Redirect to="/starwars-planets/main" />;

  return (
    <div className="intro">
      <SkipButton handleClick={ handleClick }/>
      <div className="fade"></div>
      <section className="content">
        <div className="crawl">
          <div>
            <p className="sub-title">
              Projeto Trybe
            </p>
            <h1 className="title">
              Star Wars Planets Search
            </h1>
          </div>
          <div className="text-content">
            <p>Há muito tempo atrás, em uma galáxia distante...</p>
            <p>Nesta aplicação é possível consultar informações sobre alguns planetas do universo de Star Wars, também é possível fazer buscas, aplicar filtros e reordenar a lista.</p>
            <p>Este projeto foi realizado utilizando React e tem como objetivo por em prática os recursos de hooks, componentes funcionais e a context API do React para gerenciamento do estado global.</p>
            <p>Este projeto foi realizado dentro do curso de Desenvolvimento Web da Trybe, e para isso foi consumida a SWAPI oferecida no próprio repositório do projeto. Dessa forma foi possível exercitar também requisições assíncronas.</p>
            <p>Que a força esteja com você!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro;
