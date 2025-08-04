import React, { useState } from 'react'
import Quiz11 from '../components/Quiz11'
import '../styles/pages/QuicesSemana1.css' // Puedes renombrar a QuicesSemana11.css si deseas

const QuizSemana11 = () => {
  const [mostrarQuiz, setMostrarQuiz] = useState(false)

  return (
    <div className="quices-container">
      <h1>🧾 Quiz Semana 11</h1>

      {!mostrarQuiz && (
        <div className="quiz-intro">
          <p>📌 Este quiz evalúa tus conocimientos sobre los retos de ciberseguridad resueltos en la Semana 11 (PicoCTF).</p>
          <ul>
            <li>Duración recomendada: sin límite.</li>
            <li>Consta de 10 preguntas seleccionadas aleatoriamente de un banco de 20.</li>
            <li>Cada pregunta vale 1 punto. Tu puntaje se mostrará al finalizar.</li>
            <li>Recibirás sugerencias sobre en qué mejorar.</li>
          </ul>

          <div className="quiz-image-preview">
            <img
              src="/assets/quices.jpg"
              alt="Quiz semana 11"
              className="quiz-image"
            />
          </div>

          <button className="empezar-btn" onClick={() => setMostrarQuiz(true)}>
            🚀 Empezar Quiz
          </button>
        </div>
      )}

      {mostrarQuiz && <Quiz11 />}
    </div>
  )
}

export default QuizSemana11
