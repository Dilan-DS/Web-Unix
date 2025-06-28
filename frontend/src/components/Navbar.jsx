import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { semanas } from '../data/semanas'
import { quices } from '../data/quices'
import '../styles/components/Navbar.css'

const Navbar = () => {
  const [mostrarDropdown, setMostrarDropdown] = useState(null)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [modoOscuro, setModoOscuro] = useState(false)

  const esMovil = window.innerWidth <= 768

  const toggleDropdown = (nombre) => {
    setMostrarDropdown(mostrarDropdown === nombre ? null : nombre)
  }

  const toggleDarkMode = () => {
    document.body.classList.toggle('modo-oscuro')
    setModoOscuro(prev => !prev)
  }

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="hamburger" onClick={() => setMenuAbierto(!menuAbierto)}>☰</div>
        <div className="navbar-logo">📡 Introducción a Unix</div>
      </div>

      <div className={`navbar-links-container ${menuAbierto ? 'abierto' : ''}`}>
        <div className="navbar-links">
          <Link to="/" className="nav-link" onClick={() => setMenuAbierto(false)}>Inicio</Link>
          <Link to="/sobre-curso" className="nav-link" onClick={() => setMenuAbierto(false)}>Sobre el curso</Link>

          {/* Dropdown Semanas */}
          <div
            className="nav-link dropdown-trigger"
            onMouseEnter={!esMovil ? () => setMostrarDropdown('semanas') : undefined}
            onMouseLeave={!esMovil ? () => setMostrarDropdown(null) : undefined}
          >
            <Link to="/semanas" className="nav-link" onClick={() => setMenuAbierto(false)}>Semanas</Link>
            <button className="dropdown-arrow" onClick={(e) => { e.preventDefault(); toggleDropdown('semanas') }}>⬇</button>
            {mostrarDropdown === 'semanas' && (
              <div className="dropdown-menu">
                {semanas.map((semana) => (
                  <Link
                    key={semana.id}
                    to={semana.ruta}
                    className="dropdown-item"
                    onClick={() => {
                      setMenuAbierto(false)
                      setMostrarDropdown(null)
                    }}
                  >
                    {semana.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Quices */}
          <div
            className="nav-link dropdown-trigger"
            onMouseEnter={!esMovil ? () => setMostrarDropdown('quices') : undefined}
            onMouseLeave={!esMovil ? () => setMostrarDropdown(null) : undefined}
          >
            <Link to="/quices" className="nav-link" onClick={() => setMenuAbierto(false)}>Quizzes</Link>
            <button className="dropdown-arrow" onClick={(e) => { e.preventDefault(); toggleDropdown('quices') }}>⬇</button>
            {mostrarDropdown === 'quices' && (
              <div className="dropdown-menu">
                {quices.map((quiz) => (
                  <Link
                    key={quiz.id}
                    to={quiz.ruta}
                    className="dropdown-item"
                    onClick={() => {
                      setMenuAbierto(false)
                      setMostrarDropdown(null)
                    }}
                  >
                    {quiz.titulo}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 📊 Ver progreso - junto a quizzes */}
          <Link to="/progreso" className="nav-link" onClick={() => setMenuAbierto(false)}>Ver progreso</Link>

          <Link to="/videos" className="nav-link" onClick={() => setMenuAbierto(false)}>Videos</Link>
          <Link to="/recursos" className="nav-link" onClick={() => setMenuAbierto(false)}>Recursos</Link>
          <Link to="/contacto" className="nav-link" onClick={() => setMenuAbierto(false)}>Contacto</Link>
          <Link to="/equipo" className="nav-link" onClick={() => setMenuAbierto(false)}>Equipo</Link>

          {/* 🌙 Botón modo oscuro - siempre al final */}
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {modoOscuro ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
