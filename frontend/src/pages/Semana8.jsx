import React, { useEffect } from 'react';
import '../styles/pages/Semana1.css';
import SemanaCard from '../components/SemanaCard';
import {
  marcarParteComoCompletada,
  obtenerProgresoSemana,
  obtenerNotaQuiz
} from '../utils/progreso';

const Semana8 = () => {
  useEffect(() => {
    marcarParteComoCompletada("semana8", "objetivos");
    marcarParteComoCompletada("semana8", "practica");
  }, []);

  const progreso = obtenerProgresoSemana("semana8");
  const nota = obtenerNotaQuiz("semana8");

  return (
    <div className="semana1-container">
      <SemanaCard
        titulo="Semana 8: Bash Scripting - Flujos de Control en Estructuras Repetitivas"
        descripcion="Automatización de tareas repetitivas con bucles for, while y until."
        video="https://www.youtube.com/watch?v=tu_video_aqui"
        quiz="/quiz/semana8"
      />

      <div style={{ marginTop: '1rem' }}>
        <p>📈 Progreso actual: {progreso}%</p>
        {nota !== null && <p>📝 Nota del quiz: {nota}/10</p>}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>🎯 Objetivos</h2>
        <ul>
          <li>Identificar el uso de estructuras repetitivas en Bash.</li>
          <li>Implementar bucles <code>for</code>, <code>while</code> y <code>until</code>.</li>
          <li>Controlar el flujo de ejecución mediante condiciones.</li>
          <li>Aplicar lógica de repetición para automatizar tareas.</li>
        </ul>

        <h2>📦 Scripts con explicación</h2>

        <h3>Ejercicio 1: Bucle for con rango numérico</h3>
        <pre>{`#!/bin/bash
for i in {1..5}; do
  echo "Iteración número $i"
done`}</pre>
        <div className="explicacion">
          <p>for i in &#123;1..5&#125; → Recorre del 1 al 5 automáticamente.</p>
          <p>echo "Iteración número $i" → Imprime el número actual.</p>
          <p>done → Fin del bucle.</p>
        </div>

        <h3>Ejercicio 2: Bucle while que cuenta hasta 5</h3>
        <pre>{`#!/bin/bash
i=1
while [ $i -le 5 ]; do
  echo "Contador: $i"
  i=$((i+1))
done`}</pre>
        <div className="explicacion">
          <p>i=1 → Inicializa el contador.</p>
          <p>while [ $i -le 5 ] → Se repite mientras i sea menor o igual a 5.</p>
          <p>i=$((i+1)) → Aumenta i en cada iteración.</p>
        </div>

        <h3>Ejercicio 3: Bucle until</h3>
        <pre>{`#!/bin/bash
i=1
until [ $i -gt 5 ]; do
  echo "Número: $i"
  i=$((i+1))
done`}</pre>
        <div className="explicacion">
          <p>until → Ejecuta mientras la condición sea falsa.</p>
          <p>[ $i -gt 5 ] → Se detiene cuando i sea mayor que 5.</p>
        </div>

        <h3>Ejercicio 4: Suma de los primeros 5 números</h3>
        <pre>{`#!/bin/bash
suma=0
for i in {1..5}; do
  suma=$((suma+i))
done
echo "La suma total es: $suma"`}</pre>
        <div className="explicacion">
          <p>suma=0 → Inicia acumulador.</p>
          <p>suma=$((suma+i)) → Acumula en cada iteración.</p>
        </div>

        <h3>Ejercicio 5: Mostrar archivos de un directorio</h3>
        <pre>{`#!/bin/bash
for archivo in *; do
  echo "Archivo: $archivo"
done`}</pre>
        <div className="explicacion">
          <p>* → Recorre todos los archivos del directorio.</p>
          <p>echo → Muestra el nombre de cada archivo.</p>
        </div>

        <h3>Ejercicio 6: Romper un bucle con break</h3>
        <pre>{`#!/bin/bash
for i in {1..10}; do
  if [ $i -eq 5 ]; then
    echo "Interrumpido en $i"
    break
  fi
  echo "Número: $i"
done`}</pre>
        <div className="explicacion">
          <p>if [ $i -eq 5 ] → Condición para detener.</p>
          <p>break → Termina el bucle anticipadamente.</p>
        </div>

        <h3>Ejercicio 7: Saltar con continue</h3>
        <pre>{`#!/bin/bash
for i in {1..5}; do
  if [ $i -eq 3 ]; then
    continue
  fi
  echo "Número: $i"
done`}</pre>
        <div className="explicacion">
          <p>continue → Salta la iteración actual si se cumple la condición.</p>
        </div>

        <h2>📋 Pseudocódigo ejemplo</h2>
        <pre>{`Inicio
  suma ← 0
  Para i desde 1 hasta 5 hacer
    suma ← suma + i
  Fin Para
  Mostrar "La suma total es: ", suma
Fin`}</pre>

        <h2>🧠 Conclusión</h2>
        <p>El uso de estructuras repetitivas en Bash permite automatizar tareas y mejorar la eficiencia. Dominar for, while, until, y controladores como break y continue es esencial para scripts robustos.</p>

        <h2>📚 Bibliografía</h2>
        <ul>
          <li>Manual de GNU Bash: <code>man bash</code></li>
          <li><a href="https://ryanstutorials.net/bash-scripting-tutorial/">ryanstutorials.net</a></li>
          <li>Documento fuente: IU_PL_S8.docx</li>
        </ul>
      </section>
    </div>
  );
};

export default Semana8;
