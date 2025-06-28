import React from 'react';
import '../styles/pages/Videos.css';

const Videos = () => {
  return (
    <div className="videos-container">
      <h1>🎥 Videos del curso (16 semanas)</h1>

      {/* Semana 1 */}
      <div className="video-card">
        <h2>📹 Video 1 (Semana 1): Gestión de logs en Linux</h2>
        <p>
          ✏️ Este video explica los conceptos básicos de logs, su ubicación en el sistema y cómo analizarlos
          con comandos como <code>tail</code>, <code>cat</code>, <code>less</code> y <code>grep</code> en Linux.
        </p>
        <a href="https://www.youtube.com/watch?v=QHKy5xsY0dk" target="_blank" rel="noopener noreferrer">
          🔗 Ver en YouTube
        </a>
      </div>

      {/* Semana 2 */}
      <div className="video-card">
        <h2>📹 Video 2 (Semana 2): Aprende AWK desde cero</h2>
        <p>
          ✏️ Introducción práctica al uso del lenguaje AWK para procesar información en líneas y columnas,
          ideal para trabajar con logs en GNU/Linux.
        </p>
        <a href="https://www.youtube.com/watch?v=YFlEY_4gUVs" target="_blank" rel="noopener noreferrer">
          🔗 Ver en YouTube
        </a>
      </div>

      {/* Semana 3 */}
      <div className="video-card">
        <h2>📹 Video 3 (Semana 3): Entornos Virtuales y Programación Python</h2>
        <p>
          ✏️ Se explica cómo instalar Python 2 y 3, crear scripts, usar el modo interactivo, instalar librerías y configurar entornos virtuales.
        </p>
        <a href="https://youtu.be/TU_ENLACE_VIDEO" target="_blank" rel="noopener noreferrer">
          🔗 Ver en YouTube
        </a>
      </div>

      {/* Semana 4 */}
      <div className="video-card">
        <h2>📹 Video 4 (Semana 4): Programación con Perl</h2>
        <p>
          ✏️ Procesamiento de datos en Perl: variables, arrays, constantes, operadores y funciones integradas. También se usan scripts .pl y .cgi.
        </p>
        <a href="https://youtu.be/TU_ENLACE_VIDEO" target="_blank" rel="noopener noreferrer">
          🔗 Ver en YouTube
        </a>
      </div>

      {/* Semana 5 */}
      <div className="video-card">
        <h2>📹 Video 5 (Semana 5): Centralización de logs</h2>
        <p>
          ✏️ Configura rsyslog para recibir registros desde varios clientes Linux y automatiza la recolección con cron.
        </p>
        <a href="https://www.youtube.com/watch?v=q5b1X9cxtYE" target="_blank" rel="noopener noreferrer">
          🔗 Ver en YouTube
        </a>
      </div>

      {/* Aquí puedes seguir con las semanas 6 a 16 siguiendo el mismo formato */}
    </div>
  );
};

export default Videos;
