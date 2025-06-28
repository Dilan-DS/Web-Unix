import React, { useEffect, useState } from 'react';
import {
  obtenerTodasLasSemanas,
  obtenerProgresoSemana,
  obtenerProgresoGlobal,
  obtenerNotaQuiz
} from '../utils/progreso';
import '../styles/pages/Progreso.css';

const Progreso = () => {
  const [progresoSemanas, setProgresoSemanas] = useState([]);
  const [progresoTotal, setProgresoTotal] = useState(0);

  useEffect(() => {
    const semanas = obtenerTodasLasSemanas();

    const datos = semanas.map((s) => {
      const nota = obtenerNotaQuiz(s.id); 
      return {
        ...s,
        progreso: obtenerProgresoSemana(s.id),
        nota: nota !== null ? Math.round(nota * 10) / 10 : null 
      };
    });

    setProgresoSemanas(datos);
    setProgresoTotal(obtenerProgresoGlobal());
  }, []);

  return (
    <div className="progreso-container">
      <h2>📊 Progreso del Curso</h2>

      <div className="progreso-total">
        <h3>Progreso Global: {progresoTotal}%</h3>
        <progress value={progresoTotal} max="100"></progress>
      </div>

      <ul className="lista-semanas">
        {progresoSemanas.map((sem) => (
          <li key={sem.id} className="item-semana">
            <div className="titulo-semana">
              <strong>{sem.titulo}</strong>
              <span>{sem.progreso}%</span>
            </div>
            <progress value={sem.progreso} max="100"></progress>
            <p className="nota-quiz">
              {sem.nota !== null
                ? `📝 Nota del Quiz: ${sem.nota}/10`
                : '❌ Quiz no realizado'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progreso;
