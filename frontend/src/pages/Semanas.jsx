import React from 'react'
import { Link } from 'react-router-dom'
import { obtenerTodasLasSemanas, obtenerProgresoSemana } from '../utils/progreso'
import '../styles/pages/Semanas.css'

const Semanas = () => {
  const semanas = obtenerTodasLasSemanas()

  return (
    <div className="semanas-container">
      <h1>📅 Todas las semanas del curso</h1>
      <ul className="lista-semanas">
        {semanas.map((semana) => {
          const progreso = obtenerProgresoSemana(semana.id)

          let colorClase = ''
          if (progreso < 50) {
            colorClase = 'rojo'
          } else if (progreso < 75) {
            colorClase = 'amarillo'
          } else {
            colorClase = 'verde'
          }

          return (
            <li key={semana.id} className="semana-item">
              <span className="titulo-semana">{semana.titulo}</span>

              {/* Barra de progreso tipo batería */}
              <div className="barra-progreso">
                <progress
                  value={progreso}
                  max="100"
                  className={`barra ${colorClase}`}
                ></progress>
                <span className="progreso-texto">{progreso}%</span>
              </div>

              <Link to={semana.ruta} className="btn-ver">Ver</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Semanas
