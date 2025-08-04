import React from 'react'
import { Link } from 'react-router-dom'
import { marcarParteComoCompletada } from '../utils/progreso'; 
import '../styles/components/SemanaCard.css'

const SemanaCard = ({ titulo, descripcion, video, quiz }) => {
  // Extrae el ID de la semana desde el título (ej: "Semana 1: Logs" → semana1)
  const semanaId = titulo.toLowerCase().includes("semana 1") ? "semana1"
                : titulo.toLowerCase().includes("semana 2") ? "semana2"
                : titulo.toLowerCase().includes("semana 3") ? "semana3"
                : titulo.toLowerCase().includes("semana 4") ? "semana4"
                : titulo.toLowerCase().includes("semana 5") ? "semana5"
                : titulo.toLowerCase().includes("semana 6") ? "semana6"
                : titulo.toLowerCase().includes("semana 7") ? "semana7"
                : titulo.toLowerCase().includes("semana 8") ? "semana8"
                : titulo.toLowerCase().includes("semana 9") ? "semana9"
                : titulo.toLowerCase().includes("semana 10") ? "semana10"
                : titulo.toLowerCase().includes("semana 11") ? "semana11"
                : titulo.toLowerCase().includes("semana 12") ? "semana12"
                : titulo.toLowerCase().includes("semana 13") ? "semana13"
                : titulo.toLowerCase().includes("semana 14") ? "semana14"
                : "desconocida"

  const handleVerVideo = () => {
    marcarParteComoCompletada(semanaId, "video")
    window.open(video, '_blank') // Abre el video en nueva pestaña
  }

  const handleQuiz = () => {
    marcarParteComoCompletada(semanaId, "quiz")
  }

  return (
    <div className="semana-card">
      <h3 className="semana-title">{titulo}</h3>
      <p className="semana-description">{descripcion}</p>

      <div>
        <button onClick={handleVerVideo} className="semana-btn video-btn">
          🎥 Ver Video
        </button>

        <Link 
          to={quiz}
          className="semana-btn quiz-btn"
          onClick={handleQuiz}
        >
          📝 Quiz
        </Link>
      </div>
    </div>
  )
}

export default SemanaCard
