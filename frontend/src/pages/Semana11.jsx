import React, { useEffect } from 'react'
import '../styles/pages/Semana1.css'
import SemanaCard from '../components/SemanaCard'
import {
  marcarParteComoCompletada,
  obtenerProgresoSemana,
  obtenerNotaQuiz,
} from '../utils/progreso'

const Semana11 = () => {
  useEffect(() => {
    marcarParteComoCompletada('semana11', 'objetivos')
    marcarParteComoCompletada('semana11', 'practica')
  }, [])

  const progreso = obtenerProgresoSemana('semana11')
  const nota = obtenerNotaQuiz('semana11')

  return (
    <div className="semana1-container">
      <SemanaCard
        titulo="Semana 11: Retos PicoCTF"
        descripcion="Ejercicios prácticos sobre búsqueda, hashing, git, binarios y decodificación base64."
        video="https://www.youtube.com/watch?v=0J5R9QP0zRw"
        quiz="/quiz/semana11"
      />

      <div style={{ marginTop: '1rem' }}>
        <p>📈 Progreso actual: {progreso}%</p>
        {nota !== null && <p>📝 Nota del quiz: {nota}/10</p>}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>🧠 Objetivos</h2>
        <ul>
          <li>Practicar retos PicoCTF reales.</li>
          <li>Aplicar comandos de Linux para análisis de archivos.</li>
          <li>Usar herramientas como <code>grep</code>, <code>find</code>, <code>base64</code>, <code>md5sum</code>.</li>
        </ul>

        <h2>🛠️ Retos y soluciones</h2>

        <h3>1. Big Zip</h3>
        <pre>
{`$ unzip big-zip-files.zip
$ grep -ri "pico" big-zip-files
Flag: picoCTF{gr3p_15_m4g1c_ef8790dc}`}
        </pre>

        <h3>2. binhexa</h3>
        <pre>
{`$ nc titan.picoctf.net 61574
...
Flag: picoCTF{b1tw^3se_0p3eR@tI0n_su33essFuL_d9a7ddd2}`}
        </pre>

        <h3>3. Blame Game</h3>
        <pre>
{`$ unzip challenge.zip
$ cd drop-in
$ git blame message.py
Flag: picoCTF{@sk_th3_1nt3rn_2c6bf174}`}
        </pre>

        <h3>4. First Find</h3>
        <pre>
{`$ unzip files.zip
$ find . -type f -name "uber-secret.txt"
$ cat ./.../uber-secret.txt
Flag: picoCTF{f1nd_15_f457_ab443fd1}`}
        </pre>

        <h3>5. Glitch Cat</h3>
        <pre>
{`$ nc saturn.picoctf.net 49173
Flag: picoCTF{gl17ch_m3_n07_bda68f75}`}
        </pre>

        <h3>6. HashingJobApp</h3>
        <pre>
{`$ echo -n 'amputations' | md5sum
Flag: picoCTF{4ppl1c4710n_r3c31v3d_bf2ceb02}`}
        </pre>

        <h3>7. PW Crack 1</h3>
        <pre>
{`$ nano level1.py
Contraseña: 691d
Flag: picoCTF{545h_r1ng1ng_56891419}`}
        </pre>

        <h3>8. PW Crack 2</h3>
        <pre>
{`$ nano level2.py
Contraseña: 39ce
Flag: picoCTF{tr45h_51ng1ng_502ec42e}`}
        </pre>

        <h3>9. Repetitions</h3>
        <pre>
{`$ base64 -d enc_flag > decoded.txt ...
Flag: picoCTF{base64_n3st3d_dic0d!n8_d0wnl04d3d_492767d2}`}
        </pre>

        <h3>10. runme.py</h3>
        <pre>
{`$ python3 runme.py
Flag: picoCTF{run_s4n1ty_run}`}
        </pre>

        <h2>📚 Referencias</h2>
        <ul>
          <li><a href="https://play.picoctf.org/practice" target="_blank" rel="noreferrer">https://play.picoctf.org/practice</a></li>
          <li>Material de laboratorio de clase</li>
        </ul>
      </section>
    </div>
  )
}

export default Semana11
