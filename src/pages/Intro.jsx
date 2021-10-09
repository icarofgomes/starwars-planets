import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

function Intro() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setIntro(false), 50000)
  }, [])

  if (!intro) return <Redirect to="/starwars-planets/main" />;

  return (
    <div className="intro">
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem quis corrupti, commodi eius ut, quia reiciendis quisquam accusantium aliquam animi omnis eaque. Aspernatur itaque iure non vero unde harum.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio optio architecto culpa molestiae officiis. Necessitatibus error doloribus voluptates doloremque iusto quaerat nostrum sed rerum, neque tempora veritatis provident impedit? Excepturi!</p>
            <p>Que a força esteja com você!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro;
