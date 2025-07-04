import React, { useEffect } from 'react';
import '../styles/pages/Semana1.css';
import SemanaCard from '../components/SemanaCard';
import {
  marcarParteComoCompletada,
  obtenerProgresoSemana,
  obtenerNotaQuiz
} from '../utils/progreso';

const Semana7 = () => {
  useEffect(() => {
    marcarParteComoCompletada("semana7", "objetivos");
    marcarParteComoCompletada("semana7", "practica");
  }, []);

  const progreso = obtenerProgresoSemana("semana7");
  const nota = obtenerNotaQuiz("semana7");

  return (
    <div className="semana1-container">
      <SemanaCard
        titulo="Semana 7: Bash Scripting - Estructuras Selectivas"
        descripcion="Condicionales con Bash: if, else, elif y control de flujo de ejecución."
        video="https://www.youtube.com/watch?v=9GvTqL4GHdY"
        quiz="/quiz/semana7"
      />

      <div style={{ marginTop: '1rem' }}>
        <p>📈 Progreso actual: {progreso}%</p>
        {nota !== null && <p>📝 Nota del quiz: {nota}/10</p>}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>🎯 Objetivos</h2>
        <ul>
          <li>Comprender el uso de estructuras de control selectivas en Bash.</li>
          <li>Aplicar sentencias condicionales para tomar decisiones en scripts.</li>
        </ul>

        <h2>📌 Instrucciones globales</h2>
        <ul>
          <li>Guarda cada script en un archivo, por ejemplo: <code>ejercicio1.sh</code></li>
          <li>Dale permisos con: <code>chmod +x ejercicio1.sh</code></li>
          <li>Ejecuta usando: <code>./ejercicio1.sh</code></li>
        </ul>

        <h2>📦 Scripts disponibles</h2>
        <ol>
          <li>
            <strong>Ejercicio 1: Número positivo o negativo</strong>
            <pre>{`#!/bin/bash
read -p "Introduce un número: " num
if [ $num -ge 0 ]; then
  echo "El número es positivo."
else
  echo "El número es negativo."
fi
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 2: Número par o impar</strong>
            <pre>{`#!/bin/bash
read -p "Introduce un número: " num
if [ $((num % 2)) -eq 0 ]; then
  echo "Es par."
else
  echo "Es impar."
fi
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 3: Comparación de dos números</strong>
            <pre>{`#!/bin/bash
read -p "Primer número: " n1
read -p "Segundo número: " n2
if [ $n1 -gt $n2 ]; then
  echo "$n1 es mayor que $n2"
elif [ $n1 -lt $n2 ]; then
  echo "$n1 es menor que $n2"
else
  echo "Son iguales."
fi
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 4: Validar si existe un archivo</strong>
            <pre>{`#!/bin/bash
read -p "Nombre del archivo: " archivo
if [ -f "$archivo" ]; then
  echo "El archivo existe."
else
  echo "No existe."
fi
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 5: Comparar tres números</strong>
            <pre>{`#!/bin/bash
read -p "n1: " a
read -p "n2: " b
read -p "n3: " c
if [ $a -ge $b ] && [ $a -ge $c ]; then
  echo "$a es el mayor."
elif [ $b -ge $a ] && [ $b -ge $c ]; then
  echo "$b es el mayor."
else
  echo "$c es el mayor."
fi
exit 0`}</pre>
          </li>
          <li>
            <strong>Ejercicio 6: Validar tipo de archivo</strong>
            <pre>{`#!/bin/bash
read -p "Archivo: " f
if [ -d "$f" ]; then
  echo "Es un directorio."
elif [ -f "$f" ]; then
  echo "Es un archivo."
else
  echo "No existe."
fi
exit 0`}</pre>
          </li>
        </ol>

        <p style={{ marginTop: '2rem' }}>💡 Puedes modificar los scripts para practicar más condiciones combinadas o anidadas según necesites.</p>

        <h2>📚 Bibliografía</h2>
        <ul>
          <li>Manual de GNU Bash: <code>man bash</code></li>
          <li><a href="https://ryanstutorials.net/bash-scripting-tutorial/">https://ryanstutorials.net/bash-scripting-tutorial/</a></li>
          <li>Documento fuente: IU_PL_S7.pdf</li>
        </ul>
      </section>
    </div>
  );
};

export default Semana7;
