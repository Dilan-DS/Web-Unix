import React, { useEffect } from 'react';
import '../styles/pages/Semana1.css';
import SemanaCard from '../components/SemanaCard';
import {
  marcarParteComoCompletada,
  obtenerProgresoSemana,
  obtenerNotaQuiz,
} from '../utils/progreso';

const Semana13 = () => {
  useEffect(() => {
    marcarParteComoCompletada('semana13', 'objetivos');
    marcarParteComoCompletada('semana13', 'practica');
  }, []);

  const progreso = obtenerProgresoSemana('semana13');
  const nota = obtenerNotaQuiz('semana13');

  return (
    <div className="semana1-container">
      <SemanaCard
        titulo="Semana 13: Análisis Web, Cookies y Netcat"
        descripcion="Resolución de retos PicoCTF utilizando técnicas de inspección, decodificación, análisis de heap y herramientas como curl, netcat, strings y base64."
        video="https://www.youtube.com/watch?v=0J5R9QP0zRw"
        quiz="/quiz/semana13"
      />

      <div style={{ marginTop: '1rem' }}>
        <p>📈 Progreso actual: {progreso}%</p>
        {nota !== null && <p>📝 Nota del quiz: {nota}/10</p>}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>🧠 Objetivos</h2>
        <ul>
          <li>Aplicar decodificación base64 desde terminal</li>
          <li>Analizar cookies HTTP para descubrir datos ocultos</li>
          <li>Extraer información sensible desde volcados de memoria (heap)</li>
          <li>Inspeccionar HTML y atributos ocultos</li>
          <li>Utilizar netcat como herramienta de comunicación</li>
        </ul>

        <h2>🛠️ Retos y pasos prácticos</h2>

        <h3>1. Bases</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ echo "bDNhcm5fdGgzX3IwcDM1" | base64 --decode`}</pre>
          <div className="explicacion">
            <p># Decodifica un string base64 entregado por el reto</p>
            <p><strong>Flag:</strong> {'picoCTF{l3arn_th3_r0p35}'}</p>
          </div>
        </div>

        <h3>2. Cookie Monster Secret Recipe</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ curl http://verbal-sleep.picoctf.net:57968/
# Nos redirige a un formulario. Enviamos login:
$ curl -X POST http://verbal-sleep.picoctf.net:57968/login.php -d "username=test&password=123456"
# Revisa las cookies con una herramienta o desde consola. Decodifica:
$ echo "cGljb0NURntjMDBrMWVfbTBuc3Rlcl9sMHZlc19jMDBraWVzXzZFODFGQzFFfQ==" | base64 -d`}</pre>
          <div className="explicacion">
            <p># La flag estaba en una cookie base64</p>
            <p><strong>Flag:</strong> {'picoCTF{c00k1e_m0nster_l0ves_c00kies_6E81FC1E}'}</p>
          </div>
        </div>

        <h3>3. Head Dump</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ curl http://verbal-sleep.picoctf.net:64245/heapdump -o dump.txt
$ strings dump.txt | grep picoCTF`}</pre>
          <div className="explicacion">
            <p># Descarga un volcado de memoria heap y busca cadenas legibles</p>
            <p><strong>Flag:</strong> {'picoCTF{Pat!3nt_15_Th3_K3y_ad7ea5ae}'}</p>
          </div>
        </div>

        <h3>4. WebDecode</h3>
        <div className="comando-explicacion-grid">
          <pre>{`# Abrir la página web del reto y hacer clic derecho > inspeccionar
# En el atributo notify_true aparece un string base64:
$ echo "cGljb0NURnt3ZWJfc3VjYzNzc2Z1bGx5X2QzYzBkZWRfZjZmNmI3OGF9" | base64 -d`}</pre>
          <div className="explicacion">
            <p># La flag se esconde en un atributo HTML personalizado</p>
            <p><strong>Flag:</strong> {'picoCTF{web_succ3ssfully_d3c0ded_f6f6b78a}'}</p>
          </div>
        </div>

        <h3>5. Warmed Up</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ echo $((0x3D))     # Convierte de hex a decimal
$ printf "%d\\n" 112           # Imprime el valor decimal
$ printf "\\x70\\n"            # Imprime el carácter correspondiente a 0x70`}</pre>
          <div className="explicacion">
            <p># Manipulación de hexadecimal, decimal y ASCII</p>
            <p><strong>Flag:</strong> {'picoCTF{61}'}</p>
          </div>
        </div>

        <h3>6. Strings It</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ strings strings | grep picoCTF`}</pre>
          <div className="explicacion">
            <p># El archivo binario 'strings' contiene texto visible embebido</p>
            <p><strong>Flag:</strong> {'picoCTF{5tRIng5_1T_d66c7bb7}'}</p>
          </div>
        </div>

        <h3>7. What’s a net cat?</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ nc jupiter.challenges.picoctf.org 41120`}</pre>
          <div className="explicacion">
            <p># Netcat se conecta y el servidor responde con la flag</p>
            <p><strong>Flag:</strong> {'picoCTF{nEtCat_Mast3ry_3214be47}'}</p>
          </div>
        </div>

        <h2>📚 Referencias</h2>
        <ul>
          <li><a href="https://play.picoctf.org" target="_blank" rel="noreferrer">https://play.picoctf.org</a></li>
          <li>Archivo semana13.docx</li>
        </ul>
      </section>
    </div>
  );
};

export default Semana13;
