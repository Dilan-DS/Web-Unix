import React, { useEffect, useState } from 'react';
import '../styles/pages/Home.css';

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Efecto para ocultar el intro después de 3.5 segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro && (
        <div className="intro-overlay">
          <img src="/assets/intro.png" alt="Intro animación" className="intro-image" />
        </div>
      )}

      <div className={`home-container ${showIntro ? 'hidden' : ''}`}>
        {/* Fondo decorativo animado */}
        <div className="rombo-pattern">
          <div className="dot" style={{ top: '5%', left: '30%' }}></div>
          <div className="dot" style={{ top: '20%', left: '50%' }}></div>
          <div className="dot" style={{ top: '35%', left: '40%' }}></div>
          <div className="dot" style={{ top: '50%', left: '60%' }}></div>
          <div className="line" style={{ top: '5%', left: '30%', transform: 'rotate(45deg)' }}></div>
          <div className="line" style={{ top: '20%', left: '50%', transform: 'rotate(30deg)' }}></div>
          <div className="line" style={{ top: '35%', left: '40%', transform: 'rotate(-20deg)' }}></div>
        </div>

        <div className="intro-section">
          <div className="intro-texto">
            <h1 className="home-title">🚀 ¡Bienvenido al curso Introducción a Unix!</h1>
            <p className="home-subtitle">
              Explora el poder de la línea de comandos y aprende a dominar el sistema que mueve al mundo.
            </p>

            <ul className="home-bullets">
              <li>Entender la estructura de archivos de Unix/Linux.</li>
              <li>Dominar comandos básicos y avanzados de terminal.</li>
              <li>Automatizar tareas con scripts Bash.</li>
              <li>Conectarse y transferir archivos por red.</li>
            </ul>

            <blockquote className="home-quote">
              “Unix no te da todo… te da las herramientas para construir todo.”  
              <br /><span>– Dario Valarezo</span>
            </blockquote>

            <div className="home-topics">
              <p><strong>Aprenderás a:</strong></p>
              <ul>
                <li>🛠️ Usar comandos como <code>ls</code>, <code>grep</code>, <code>chmod</code></li>
                <li>📦 Instalar paquetes y manejar usuarios</li>
                <li>📁 Navegar estructuras de carpetas y archivos</li>
                <li>🧠 Entender el poder de la consola</li>
              </ul>
            </div>

            <p className="home-message">
              Este curso fue creado con 💙 por estudiantes de la UIDE.  
              <br />¡Explóralo y domina la terminal como un profesional!
            </p>
            <a href="/equipo" className="home-button">Conoce al equipo</a>
            <a href="/semana1" className="home-button">🚀 Comenzar ahora</a>

          </div>

          <div className="intro-imagen">
            <img src="/assets/logo.png" alt="Logo del curso" className="home-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
