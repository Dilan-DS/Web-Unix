import React, { useEffect } from 'react';
import '../styles/pages/Semana1.css';
import SemanaCard from '../components/SemanaCard';
import {
  marcarParteComoCompletada,
  obtenerProgresoSemana,
  obtenerNotaQuiz
} from '../utils/progreso';

const Semana9 = () => {
  useEffect(() => {
    marcarParteComoCompletada("semana9", "objetivos");
    marcarParteComoCompletada("semana9", "practica");
  }, []);

  const progreso = obtenerProgresoSemana("semana9");
  const nota = obtenerNotaQuiz("semana9");

  return (
    <div className="semana1-container">
      <SemanaCard
        titulo="Semana 9: Bash Scripting - Flujos de Control en Estructuras Repetitivas"
        descripcion="Resolver los retos de picoCTF utilizando Bash Scripting y estructuras de control."
        video="https://www.youtube.com/watch?v=tu_video_aqui"
        quiz="/quiz/semana9"
      />

      <div style={{ marginTop: '1rem' }}>
        <p>📈 Progreso actual: {progreso}%</p>
        {nota !== null && <p>📝 Nota del quiz: {nota}/10</p>}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>🎯 Objetivos</h2>
        <ul>
          <li>Crear una cuenta en picoCTF.</li>
          <li>Aprender Nuevas Herramientas.</li>
          <li>Ir practicando con los ejercicios para el examen.</li>
          <li>Aplicar lo aprendido y mejorar mediante los ejercicios.</li>
        </ul>

        <h2>📦 Ejercicios Pico-CTF su con explicación</h2>

        <h3>1. Binary Search</h3>
        <pre>{`Descripción
¿Quieres jugar? A medida que uses más el shell, ¡quizás te interese saber cómo funcionan! La búsqueda binaria es un algoritmo clásico para encontrar rápidamente un elemento en una lista ordenada. ¿Puedes encontrar la bandera? Tendrás 1000 posibilidades y solo 10 intentos.
La ciberseguridad suele requerir una gran cantidad de datos que analizar, desde registros y reportes de vulnerabilidad hasta análisis forense. Practicar los fundamentos manualmente podría ayudarte en el futuro cuando tengas que desarrollar tus propias herramientas.
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://medium.com/@vgqxjb/binary-search-picoctf-c1830c6a05c1">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>


        <h3>2. Collaborative Development</h3>
        <pre>{`Descripción
Mi equipo ha estado trabajando arduamente en nuevas funciones para nuestro programa de impresión de banderas. ¿Cómo funcionarán juntas?
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.
`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://medium.com/@vgqxjb/collaborative-development-9c1875e7dce2">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>

        <h3>3. Commitment Issues</h3>
        <pre>{`Descripción
Anoté la bandera sin querer. ¡Menos mal que la borré!
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://medium.com/@viscidCTF/picoctf-2024-commitment-issues-6cbf52046506">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>

        <h3>4. Endianness</h3>
        <pre>{`Descripción
¿Conoces el formato little endian y big endian?
Fuente
Habrá detalles adicionales disponibles después de lanzar su instancia de desafío
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://medium.com/@Espress0/picoctf-endianness-little-and-big-endian-95ab226fd23d">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>

        <h3>5.FANTASY CTF</h3>
        <pre>{`Descripción
Juegue a este juego corto para familiarizarse con las aplicaciones de terminal y algunas de las reglas más importantes dentro del alcance de picoCTF.
Conectarse al programa con netcat:
$ nc verbal-sleep.picoctf.net 57327
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://www.linkedin.com/posts/rehema-said-35ab31219_picoctffantasy-ctffantasy-ctf-writeup-activity-7311371253389402113-gCpR">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>

        <h3>Rust fixme 1</h3>
        <pre>{`Descripción
¿Has oído hablar de Rust? ¡Corrige los errores de sintaxis en este archivo de Rust para imprimir la bandera!
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://medium.com/@inferiorak/rust-fixme-1-general-skills-picoctf-2025-29335ea7fe28">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>

        <h3>7. Rust fixme 2</h3>
        <pre>{`Descripción
¿La saga Rust continúa? ¿Me lo prestas, por favooooor?
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://zenn.dev/tetsurou/articles/f3ae331d450a1b#rust-fixme-2---100pt">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>

        <h3>8. Rust fixme 3</h3>
        <pre>{`Descripción
¿Has oído hablar de Rust? ¡Corrige los errores de sintaxis en este archivo de Rust para imprimir la bandera!
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://zenn.dev/tetsurou/articles/f3ae331d450a1b#rust-fixme-3---100pt">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>


        <h3>9. Super SSH</h3>
        <pre>{`Descripción
El uso de un Secure Shell (SSH) será bastante importante.
Habrá detalles adicionales disponibles después de lanzar su instancia de desafío.
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.
`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://medium.com/@viscidCTF/picoctf-2024-super-ssh-0600891724cc">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>  


        <h3>10. Time Machine</h3>
        <pre>{`Descripción
¿En qué estuve trabajando la última vez? Recuerdo haber escrito una nota para recordar....
Tener en cuenta que tendras que estar en la pagina de PicoCTF para resolver los ejercicios.
`}</pre>
        <div className="explicacion">
          <p>Guia de como resolver el ejercicio paso a paso.</p>
          <p><a href="https://medium.com/@viscidCTF/picoctf-2024-time-machine-a97b5a7b413e">Ver guía</a></p>
          <p>Con eso tendrias una gran guia para poder avanzar con tu ejercicio.</p>
        </div>  

       





        <h2>📚 Bibliografía</h2>
        <ul>
          <li><a href="https://medium.com/">Guia ejercicios PicoCTF</a></li>
          <li><a href="https://picoctf.org/resources.html">PicoCTF-Learing Resources</a></li>
          <li>Documento fuente: IU_PL_S9.docx</li>
        </ul>
      </section>
    </div>
  );
};

export default Semana9;
