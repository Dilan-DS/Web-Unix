import React, { useState } from 'react'
import Quiz7 from '../components/Quiz7'
import '../styles/pages/QuicesSemana1.css'

const QuicesSemana7 = () => {
  const [mostrarQuiz, setMostrarQuiz] = useState(false)

  return (
    <div className="quices-container">
      <h1>🧾 Quiz Semana 7</h1>

      {!mostrarQuiz && (
        <div className="quiz-intro">
          <p>📌 Este quiz evalúa tus conocimientos sobre rotación, visualización y respaldo remoto de logs.</p>
          <ul>
            <li>Duración recomendada: sin límite.</li>
            <li>Consta de 10 preguntas seleccionadas aleatoriamente.</li>
            <li>Cada pregunta vale 1 punto. Tu puntaje se mostrará al finalizar.</li>
            <li>Recibirás sugerencias sobre en qué mejorar.</li>
          </ul>

          <div className="quiz-image-preview">
            <img
              src="/assets/quices.jpg"
              alt="Quiz semana 7"
              className="quiz-image"
            />
          </div>

          <button className="empezar-btn" onClick={() => setMostrarQuiz(true)}>
            🚀 Empezar Quiz
          </button>
        </div>
      )}

      {mostrarQuiz && <Quiz7 />}
    </div>
  )
}

export default QuicesSemana7
