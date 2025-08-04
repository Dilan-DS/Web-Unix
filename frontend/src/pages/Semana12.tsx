import React, { useEffect } from 'react';
import '../styles/pages/Semana1.css';
import SemanaCard from '../components/SemanaCard';
import {
  marcarParteComoCompletada,
  obtenerProgresoSemana,
  obtenerNotaQuiz,
} from '../utils/progreso';

const Semana12 = () => {
  useEffect(() => {
    marcarParteComoCompletada('semana12', 'objetivos');
    marcarParteComoCompletada('semana12', 'practica');
  }, []);

  const progreso = obtenerProgresoSemana('semana12');
  const nota = obtenerNotaQuiz('semana12');

  return (
    <div className="semana1-container">
      <SemanaCard
        titulo="Semana 12: Resolución de retos PicoCTF"
        descripcion="Se resuelven desafíos reales de ciberseguridad usando herramientas de línea de comandos y scripts personalizados."
        video="https://www.youtube.com/watch?v=0J5R9QP0zRw"
        quiz="/quiz/semana12"
      />

      <div style={{ marginTop: '1rem' }}>
        <p>📈 Progreso actual: {progreso}%</p>
        {nota !== null && <p>📝 Nota del quiz: {nota}/10</p>}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>🧠 Objetivos</h2>
        <ul>
          <li>Aplicar conocimientos de hacking ético y forense.</li>
          <li>Usar comandos de terminal, scripts y herramientas PicoCTF.</li>
        </ul>

        <h2>🛠️ Retos PicoCTF y soluciones</h2>

        <h3>1. 2Warm</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ sudo apt install bc
$ echo "obase=2; 42" | bc`}</pre>
          <div className="explicacion">
            <p># Instala el programa `bc`</p>
            <p># Convierte 42 a binario → <code>101010</code></p>
            <p><strong>Flag:</strong> {'picoCTF{101010}'}</p>
          </div>
        </div>

        <h3>2. Codebook</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ python3 code.py`}</pre>
          <div className="explicacion">
            <p># Ejecuta el script que resuelve el reto del codebook</p>
            <p><strong>Flag:</strong> {'picoCTF{c0d3b00k_455157_197a982c}'}</p>
          </div>
        </div>

        <h3>3. First Grep</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ grep 'picoCTF' file`}</pre>
          <div className="explicacion">
            <p># Busca el patrón 'picoCTF' en un archivo desordenado</p>
            <p><strong>Flag:</strong> {'picoCTF{grep_is_good_to_find_things_dba08a45}'}</p>
          </div>
        </div>

        <h3>4. Magikarp Ground Mission</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ ssh ctf-player@venus.picoctf.net -p 52447
$ cat 1of3.flag.txt
$ cd /
$ cat 2of3.flag.txt
$ cat /home/ctf-player/3of3.flag.txt`}</pre>
          <div className="explicacion">
            <p># Conexión remota SSH y búsqueda de archivos con partes de la flag</p>
            <p><strong>Flag:</strong> {'picoCTF{xxsh_0ut_0f_\/\/4t3r_c1754242}'}</p>
          </div>
        </div>

        <h3>5. Nice netcat...</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ nc mercury.picoctf.net 22342
$ python3 -c 'print("".join([chr(i) for i in [112,105,...]]))'`}</pre>
          <div className="explicacion">
            <p># Se reciben valores ASCII y se convierten en texto</p>
            <p><strong>Flag:</strong> {'picoCTF{g00d_k1tty!_n1c3_k1tty!_5fb5e51d}'}</p>
          </div>
        </div>

        <h3>6. Obedient Cat</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ cat flag`}</pre>
          <div className="explicacion">
            <p># Visualiza directamente la flag dentro de un archivo</p>
            <p><strong>Flag:</strong> {'picoCTF{s4n1ty_v3r1f13d_2aa22101}'}</p>
          </div>
        </div>

        <h3>7. Python Wrangling</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ wget https://mercury.picoctf.net/static/.../ende.py
$ python3 ende.py -d flag.txt.en ac9bd0ffac9bd0ffac9bd0ffac9bd0ff`}</pre>
          <div className="explicacion">
            <p># Se usa un script personalizado para descifrar un archivo cifrado</p>
            <p><strong>Flag:</strong> {'picoCTF{4p0110_1n_7h3_h0us3_ac9bd0ff}'}</p>
          </div>
        </div>

        <h3>8. Static ain't always noise</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ strings static | grep "picoCTF"`}</pre>
          <div className="explicacion">
            <p># Busca la flag entre cadenas imprimibles de un archivo binario</p>
            <p><strong>Flag:</strong> {'picoCTF{d15a5m_t34s3r_ae0b3ef2}'}</p>
          </div>
        </div>

        <h3>9. Tab, Tab, Attack</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ unzip Addadshashanammu.zip
$ cd Addadshashanammu/.../Ularradallaku/
$ strings fang-of-haynekhtnamet | grep "picoCTF"`}</pre>
          <div className="explicacion">
            <p># Explora carpetas profundas en un zip para encontrar la flag en binario</p>
            <p><strong>Flag:</strong> {'picoCTF{l3v3l_up!_t4k3_4_r35t!_d32e018c}'}</p>
          </div>
        </div>

        <h3>10. Wave a flag</h3>
        <div className="comando-explicacion-grid">
          <pre>{`$ strings warm | grep "picoCTF"`}</pre>
          <div className="explicacion">
            <p># Flag embebida dentro de un binario que imprime mensajes</p>
            <p><strong>Flag:</strong> {'picoCTF{b1scu1ts_4nd_gr4vy_6635aa47}'}</p>
          </div>
        </div>

        <h2>📚 Referencias</h2>
        <ul>
          <li><a href="https://play.picoctf.org" target="_blank" rel="noreferrer">https://play.picoctf.org</a></li>
          <li>Material de clase y prácticas UIDE</li>
        </ul>
      </section>
    </div>
  );
};

export default Semana12;
