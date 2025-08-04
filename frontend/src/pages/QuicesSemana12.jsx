import React, { useState } from 'react'
import Quiz12 from '../components/Quiz12'
import '../styles/pages/QuicesSemana1.css'

const QuizSemana12 = () => {
  const [mostrarQuiz, setMostrarQuiz] = useState(false)

  return (
    <div className="quices-container">
      <h1>🧾 Quiz Semana 12</h1>

      {!mostrarQuiz && (
        <div className="quiz-intro">
          <p>📌 Este quiz evalúa tus conocimientos sobre los retos de ciberseguridad resueltos en la Semana 12 (PicoCTF).</p>
          <ul>
            <li>Duración recomendada: sin límite.</li>
            <li>Consta de 10 preguntas seleccionadas aleatoriamente.</li>
            <li>Cada pregunta vale 1 punto. Tu puntaje se mostrará al finalizar.</li>
            <li>Recibirás sugerencias sobre en qué mejorar.</li>
          </ul>

          <div className="quiz-image-preview">
            <img
              src="/assets/quices.jpg"
              alt="Quiz semana 12"
              className="quiz-image"
            />
          </div>

          <button className="empezar-btn" onClick={() => setMostrarQuiz(true)}>
            🚀 Empezar Quiz
          </button>
        </div>
      )}

      {mostrarQuiz && <Quiz12 />}
    </div>
  )
}

export default QuizSemana12
