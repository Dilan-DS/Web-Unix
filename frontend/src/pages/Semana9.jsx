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
    marcarParteComoCompletada("semana8", "objetivos");
    marcarParteComoCompletada("semana8", "practica");
  }, []);

  const progreso = obtenerProgresoSemana("semana8");
  const nota = obtenerNotaQuiz("semana8");

  return (
    <div>
        <h1>Probando mi rama creada</h1>
    </div>
  );
};

export default Semana9;
